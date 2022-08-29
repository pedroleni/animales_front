import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { API } from "../services/API";
import AnimalCard from "../components/AnimalCard";

import "./Mascotas.css"
import Comentarios from "../components/Comentarios";





const Mascotas = () => {
  const [allMascotas, setAllMascotas] = useState([]);
  const [filterWord, setFilterWord] = useState("");
  

  const filteredMascotas = allMascotas.filter(
    (mascota) =>
      mascota.name.toLowerCase().includes(filterWord) ||
      mascota.nick.toLowerCase().includes(filterWord) ||
      mascota.description?.toLowerCase().includes(filterWord) ||
      mascota.searchCouple?.toLowerCase().includes(filterWord)
      
      
  );

  const getAllMascotas = async () => {
    API.get("/").then((res) => {
      setAllMascotas(res.data.data.animal);

      console.log(allMascotas)
    });
  };


  




  useEffect(() => {
    getAllMascotas();
  }, [filterWord]);


  return (
    <section>
      <div className="container_mascotas">
      <h2>Mascotas</h2>
        <SearchBar setFilterWord={setFilterWord} />
        {console.log(filterWord)}
        
        <div className="gallery_mascotas">
            {allMascotas.length ? (
              filteredMascotas.map((mascota) => (
                <AnimalCard mascota={mascota} key={mascota._id} />
              ))
            ) : (
              <p>Loading mascotas...</p>
            )}
        </div>
        <div className="image_footer">
          <img src="./images/animales.png" alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Mascotas;
