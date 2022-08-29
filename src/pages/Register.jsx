import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Register.css";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nick", data.nick);
    formData.append("password", data.password);
    formData.append("image", data.image[0]);
    API.post("/register", formData)
    .then((res) => {
      if (res) {
        navigate("/login");
        Swal.fire("Bienvenido, ya te puedes loguear con tus datos");}
    })
     .catch(function (error) {
       if (error.response) {
        const errores = JSON.stringify(error.response.data)
        const includess = errores.includes('this animal already exist')
        const includess2 = errores.includes('Failed create animal')
        if(includess2){Swal.fire("Error inexperado, vuelva a intentarlo");}
        if(includess){Swal.fire("Esta mascota ya existe");}
         
       } 
     });
  };

  return (
    <section className="register">
      <h2>Please register:</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        
        <label htmlFor="image"> Imagen </label>
        <input type="file" id="image" name="image" {...register("image")}/>
        

        <label htmlFor="name"> Name </label>
        <input type="text" id="name" name="name" {...register("name")}/>
        

        <label htmlFor="password"> Password </label>
        <input type="password" id="password" name="password" 
        title="Minimo 6 caracteres, debe contener al menos una letra mayuscula,
         al menos una minuscula y debe tener un caracter especial" 
         pattern="^(?=.*[A-Z])(?=.*[.!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$" 
         {...register("password")}/>
       

        <label htmlFor="nick"> Nick </label>
        <input type="text" id="nick" name="nick" {...register("nick")}/>
        
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
