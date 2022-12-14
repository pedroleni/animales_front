import React, { useEffect, useState } from "react";
import { API } from "../services/API";
import { useParams } from "react-router-dom";
import "./MascotasDetail.css";

const MascotasDetail = () => {
  const { id } = useParams();
  const [mascota, setMascota] = useState(undefined);

  const getMascotas = async () => {
    API.get(`/${id}`).then((res) => {
      setMascota(res.data.data.animal);
      console.log(res.data.data.animal);
    });
  };

  useEffect(() => {
    getMascotas();
    console.log(id)
  }, []);

  return (
    <>
      {mascota !== undefined ? (
        <figure className="container_detail">
          <div className="container_image_detail">
            <div className="image_detail">
              <img
                src={mascota.image}
                alt={mascota.name}
                referrerPolicy="no-referrer"
              />{" "}
            </div>
          </div>
          <div className="container_info_detail">
            <h2>{mascota.name}</h2>
            <h3>
              <span>Nick: </span>
              {mascota.nick}
            </h3>
            <p>
              <span>Owner: </span>
              {mascota.owner}
            </p>
            <p>
              <span>Contact: </span>
              {mascota.contact}
            </p>
            <p>
              <span>Location: </span>
              {mascota.location}
            </p>
            <p>
              <span>Age: </span>
              {mascota.age}
            </p>
          
            
            <p>
              <span>Type: </span>
              {mascota.type}
            </p>
      
            <p>
              <span>Description: </span>
              {mascota.description}
            </p>
          </div>
        </figure>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MascotasDetail;
