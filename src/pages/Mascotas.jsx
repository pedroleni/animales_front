import { useEffect, useState } from "react";
import { API } from "../services/API";


const Mascotas = () => {
  const [allMascotas, setAllMascotas] = useState([]);
  
  const getAllMascotas = async () => {
   API.get("/").then((res) => {
        setAllMascotas( res);
          
         
   });
      }
    
  
  useEffect (()=>{
    getAllMascotas();
  }, []);
  
  return (
    <section>
      <h2>Mascotas</h2>
      <div> {allMascotas.length ? (
      allMascotas.map ((mascota) => <p>{mascota.name}</p>)
       ) : (
         <p>Loading mascotas...</p>
       )}
       </div>
    </section>

  );
};  


export default Mascotas