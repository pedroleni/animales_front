import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Register.css";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [searchCouple, setSearchCouple] = useState("acoustic")
  let navigate = useNavigate();

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nick", data.nick);
    formData.append("password", data.password);
    // formData.append("age", data.age);
    // formData.append("location", data.location);
    // formData.append("type", data.type);
    // formData.append("description", data.description);
    // formData.append("searchCouple", data.searchCouple);
    formData.append("image", data.image[0]);
    API.post("/register", formData).then((res) => {
      if (res) {
        navigate("/login");
        Swal.fire("Bienvenido, ya te puedes loguear con tus datos");
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
        <input type="password" id="password" name="password" {...register("password")}/>
       

        <label htmlFor="nick"> Nick </label>
        <input type="text" id="nick" name="nick" {...register("nick")}/>
        

        {/* <label htmlFor="edad"> Edad </label>
        <input type="text" id="edad" name="edad" {...register("edad")}/>
        

        <label htmlFor="location"> Location </label>
        <input type="text" id="location" name="location" {...register("location")}/>
        

        <label htmlFor="type"> Type </label>
        <input type="text" id="type" name="type" {...register("type")}/>
        

        <label htmlFor="description"> Description </label>
        <input type="text" id="description" name="description" {...register("description")}/>
         */}

        {/* <label htmlFor="searchCouple">SearchCouple</label>
        <input type="radio" value="searchCouple"  {...register("searchCouple")}>Con pareja</input>
        <input type="radio" value="searchCouple" {...register("searchCouple")}>Soltero</input> */}


  

        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
