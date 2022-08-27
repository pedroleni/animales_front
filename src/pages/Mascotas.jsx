import { useEffect, useState } from "react";
import { API } from "../services/API";
import AnimalCard from "../components/AnimalCard";
import "./Mascotas.css"

const Mascotas = () => {
  const [allMascotas, setAllMascotas] = useState([]);

  const getAllMascotas = async () => {
    API.get("/").then((res) => {
      setAllMascotas(res.data.data.animal);
    });
  };

  useEffect(() => {
    getAllMascotas();
  }, []);

  return (
    <section>
      <div className="container_mascotas">
        <h2>Mascotas</h2>
        <div className="gallery_mascotas">
          
            {" "}
            {allMascotas.length ? (
              allMascotas.map((mascota) => (
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
