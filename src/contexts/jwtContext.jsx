import { useState, createContext } from "react";

export const JwtContext = createContext();

export const JwtContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState(() => {
    const savedJwt = localStorage.getItem("token");  //setea el token guardado en la memoria y retorna ese token o null
    return savedJwt || null;
  });

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  const [editingAnimal, setEditingAnimal] = useState({});

  const logout = () => {
    setUser(null);
    setJwt(null);
    localStorage.removeItem("user");    //seteamos a null tokens y animales y borramos de la memoria a estos
    localStorage.removeItem("token");
  };

  return (
    <JwtContext.Provider
      value={{
        jwt,
        setJwt,
        user,
        setUser,
        logout,
        editingAnimal,
        setEditingAnimal,
      }}
    >
      {children}
    </JwtContext.Provider>
  );
};
