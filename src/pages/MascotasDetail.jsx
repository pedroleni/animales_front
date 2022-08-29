import React, { useEffect, useState } from "react";
import { API } from "../services/API";
import { useParams } from "react-router-dom";




const MascotasDetail = () => {
    const { id } = useParams();
  const [mascota, setMascota] = useState(undefined);
 
  const getMascotas = async () => {
    API.get(`/${id}`).then((res) => {
      setMascota( 
        res.data.data.animal             
       
    );
    console.log(res.data.data.animal   )
})

};

  useEffect(() => {
    getMascotas();
  }, []);

  return (
    <figure >
      {mascota !== undefined ? (
        <>
          <h2>{mascota.name}</h2>
          <div ><img src={mascota.image} alt={mascota.name} referrerPolicy="no-referrer"/> </div>
          <h3>{mascota.nick}</h3>
          <p><span>Owner:</span>{mascota.owner}</p>
          <p><span>Age:</span>{mascota.age}</p>
          <p><span>Location</span>{mascota.location}</p>
          <p><span>Contact:</span>{mascota.contact}</p>
          <p><span>Type:</span>{mascota.type}</p>
          <p><span>¿Buscas pareja?:</span>{mascota.searchCouple}</p>
          <p><span>Description:</span>{mascota.description}</p>
          <p><span>Residencia: </span>{mascota.location}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </figure>
  );
};

export default MascotasDetail;