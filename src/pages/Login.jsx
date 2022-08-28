import { useContext } from "react";
import { JwtContext } from "../contexts/jwtContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Login.css";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { setJwt, setUser } = useContext(JwtContext);

  const formSubmit = (formData) => {
    API.post("/login", formData).then((res) => {
      console.log(res)
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.animalInDb));
      setJwt(res.data.token);
      setUser(res.data.animalInDb);
      if (res.data.token) {
        navigate("/");
        Swal.fire("Bienvenido a la web, ya puedes ver las mascotas y no olvides completar tu perfil")
      }})
      
      .catch(function (error) {
        if (error.response) {
         const errores = JSON.stringify(error.response.data)
         const includess = errores.includes('Animal no found')
         const includess2 = errores.includes('invalid password')
         const includess3 = errores.includes('Unexpected error login')
         
        
 
         if(includess){Swal.fire("Esta mascota no se encuentra");}
         if(includess2){Swal.fire("Contraseña no correcta");}
         if(includess3){Swal.fire("Error inexperado, vuelva a intentarlo");}
         
        } 
      });
  };

  return (
    <section className="login">
      <h2>Please log in:</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="nick">Nick</label>
        <input
          type="text"
          id="nick"
          name="nick"
          {...register("nick")}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password" 
          
          {...register("password")}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;