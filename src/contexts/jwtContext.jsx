import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem("token");  //setea el token guardado en la memoria y retorna ese token o null
    return savedJwt || null;
  });

  const [animal, setAnimal] = useState(() => {          
    const savedAnimal = localStorage.getItem("aninal");
    const initialValue = JSON.parse(savedAnimal);
    return initialValue || null;
  });

  const [editingAnimal, setEditingAnimal] = useState({});

  const logout = () => {
    setAnimal(null);
    setJwt(null);
    localStorage.removeItem("animal");    //seteamos a null tokens y animales y borramos de la memoria a estos
    localStorage.removeItem("token");
  };

  return (
    <JwtContext.Provider
      value={{
        jwt,
        setJwt,
        animal,
        setAnimal,
        logout,
        editingAnimal,
        setEditingAnimal,
      }}
    >
      {children}
    </JwtContext.Provider>
  );
};
