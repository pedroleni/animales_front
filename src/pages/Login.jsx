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

  

  const loading = () => {
    let timerInterval;
     Swal.fire({
      title: "Cargando mascotas!",
      html: "Espera a ver el mundo desde otra altura 😀",
      showConfirmButton: false,
      allowOutsideClick:false,
      timer: 5000,
       timerProgressBar: true,
       
     
     });
  };

  const formSubmit = (formData) => {
    API.post("/login", formData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.animalInDb));
        setJwt(res.data.token);
        setUser(res.data.animalInDb);
        if (res.data.token) {
          navigate("/");
          Swal.fire(
            "Bienvenido a la web, ya puedes ver las mascotas y no olvides completar tu perfil"
          );
        }
      })

      .catch(function (error) {
        if (error.response) {
          const errores = JSON.stringify(error.response.data);
          const includess = errores.includes("Animal no found");
          const includess2 = errores.includes("invalid password");
          const includess3 = errores.includes("Unexpected error login");
          const includess4 = errores.includes("Internal Server Error");

          if (includess) {
            Swal.fire("Esta mascota no se encuentra");
          }
          if (includess2) {
            Swal.fire("Contraseña no correcta");
          }
          if (includess3) {
            Swal.fire("Error inexperado, vuelva a intentarlo");
          }
          if (includess4) {
            Swal.fire("Error en el login, por favor vuelva a introducir los datos");
          }
        }
      });
  };

  return (
    <section className="login">
      <div className="login_title">
        <img src="/images/login_white.gif" alt="title_login" />
      </div>
      <div className="login_title_black">
        <img src="/images/login_black.gif" alt="title_login" />
      </div>
      


      <div className="container_login">
        <div className="animal_login">
          <img src="/images/1.png" alt="animal_login" />
        </div>
        <div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <label htmlFor="nick">Nick</label>
            <input type="text" id="nick" name="nick" {...register("nick")} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              title="Minimo 6 caracteres, debe contener al menos una letra mayuscula,
         al menos una minuscula y debe tener un caracter especial"
              pattern="^(?=.*[A-Z])(?=.*[.!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$"
              {...register("password")}
            />
            <button className="submit_login" type="submit" onClick={loading}>Login</button>
          </form>
        </div>
        <div>
          <img
            src="/images/4.png"
            alt="animal_login_two"
            className="animal_login_two"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
