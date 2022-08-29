
import React from "react";
import "./AnimalCard.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const AnimalCard = ({ mascota }) => {
  
  return (
    <Link to={`/mascotas/${mascota._id}`}>
    <figure className="Mascotacard">
      <img className="card_image" src={mascota.image} alt={mascota.nick} />
      <h4 className="nick">{mascota.nick}</h4>
      
      
      {mascota.searchCouple !== "inlove" ? (
        <p className="single">Solter@</p>
        
        
      ) : (
        <p className="inlOVE">Enamorad@</p>
        
      )}
    </figure>
     </Link>
  );
};

export default AnimalCard;