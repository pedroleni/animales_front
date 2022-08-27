
import "./AnimalCard.css";
import Swal from "sweetalert2";
import Mascotas from "../pages/Mascotas";

const AnimalCard = ({ mascota }) => {
  
  return (
    <figure className="Mascotacard">
      <img className="card_image" src={mascota.image} alt={mascota.nick} />
      <h4 className="name_mascota ">{mascota.name}</h4>
      <h4 className="nick"><span>Nick: </span>{mascota.nick}</h4>
      <p><span>Residencia: </span>{mascota.location}</p>
      <p><span>Edad: </span> {mascota.age}</p>
      
      {mascota.searchCouple === "soltero" ? (
        <p className="single">Solter@</p>
      ) : (
        <p className="inlOVE">Enamorad@</p>
      )}
    </figure>
  );
};

export default AnimalCard;