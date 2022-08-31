import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../services/API";
import "./Register.css";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();


  const loading = () => {
    let timerInterval;
     Swal.fire({
      title: "Resgistrandote como mascota, one moment please!",
      html: "Espera a ver el mundo desde otra altura 😀",
      showConfirmButton: false,
      allowOutsideClick:false,
      timer: 5000,
       timerProgressBar: true,
       
     
     });
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("nick", data.nick.trim());
    formData.append("password", data.password);
    formData.append("image", data.image[0]);
    API.post("/register", formData)
      .then((res) => {
        if (res) {
          navigate("/login");
          Swal.fire("Bienvenido, ya te puedes loguear con tus datos");
        } else {

        }
      })
      .catch(function (error) {
        if (error.response) {
          const errores = JSON.stringify(error.response.data);
          const includess = errores.includes("this animal already exist");
          const includess2 = errores.includes("Failed create animal");
          if (includess2) {
            Swal.fire("Error inexperado, vuelva a intentarlo");
          }
          if (includess) {
            Swal.fire("Esta mascota ya existe");
          }
        }
      });
  };

  return (
    <section className="register">
      <div className="register_title">
        <img src="/images/register_white.gif" alt="title_register" />
      </div>
      
      <div className="register_title_black">
        <img src="/images/register_black.gif" alt="title_register" />
      </div>

      <div className="container_register">
        <div className="animal_register">
          <img src="/images/2.png" alt="animal_login" />
        </div>
        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="image"> Imagen </label>
            <input type="file" id="image" name="image" {...register("image")} />

            <label htmlFor="name"> Name </label>
            <input type="text" id="name" name="name" {...register("name")} />

            <label htmlFor="password"> Password </label>
            <input
              type="password"
              id="password"
              name="password"
              title="Minimo 6 caracteres, debe contener al menos una letra mayuscula,
         al menos una minuscula y debe tener un caracter especial"
              pattern="^(?=.*[A-Z])(?=.*[.!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$"
              {...register("password")}
            />

            <label htmlFor="nick"> Nick </label>
            <input type="text" id="nick" name="nick" {...register("nick")} />

            <button className="submit_register" type="submit" onClick={loading}>Register</button>
          </form>
        </div>

        <div className="animal_register_two">
          <img src="/images/7.png" alt="animal_login_two" />
        </div>

      </div>
      <div className="animal_login_secret"><img src="/images/8.png" alt="animal_login_secret" /></div>
    </section>
  );
};

export default Register;
