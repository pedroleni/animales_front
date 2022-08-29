import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../contexts/jwtContext";
import { API } from "../services/API";
import Swal from "sweetalert2";
import "./Profile.css";

const Profile = () => {
  const { user, logout } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const defaultValues = {
    nick: user.nick,
    age: user.age,
    location: user.location,
    type: user.type,
    description: user.description,
    image: user.image,
    searchCouple:user.searchCouple,
    owner:user.owner,
    contact:user.contact
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("nick", data.nick);
    formData.append("age", data.age);
    formData.append("location", data.location);
    formData.append("type", data.type);
    formData.append("searchCouple", data.searchCouple);
    formData.append("description", data.description);
    formData.append("owner", data.owner);
    formData.append("contact", data.contact);
    

    // formData.append("searchCouple", data.searchCouple);
    data.image[0] ? formData.append("image", data.image[0]) : <></>;

    API.patch(`/${user._id}`, formData).then((res) => {
      logout();
      if (res) {
        navigate("/login");
        Swal.fire("Profile edited, please log in again");
      }
    });
  };

  const deleteAnimal = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar la mascota?",
      text: "No la vas a poder recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrala!",
    }).then((result) => {
      if (result.isConfirmed) {
        API.delete(`/${user._id}`).then((res) => {
          if (res) {
            logout();
            navigate("/");
            Swal.fire("Mascota eliminada");
          }
        });
      }
    });
  };
  return (
    <section className="profile">
      <div className="profile_title"><img src="./images/profile.gif" alt="titulo_pet" /></div>
      <img className="image_pet" src={user.image} alt="User image" />
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          type="text"
          id="nick"
          name="nick"
          {...register("nick")}
          defaultValue={defaultValues.nick}
        />
        <input type="file" id="image" name="image" {...register("image")} />

        <label htmlFor="age"> Edad </label>
        <input
          type="text"
          id="age"
          name="age"
          {...register("age")}
          defaultValue={defaultValues.age}
        />

        <label htmlFor="location"> Location </label>
        <input
          type="text"
          id="location"
          name="location"
          {...register("location")}
          defaultValue={defaultValues.location}
        />

        <label htmlFor="type"> Type </label>
        <input
          type="text"
          id="type"
          name="type"
          {...register("type")}
          defaultValue={defaultValues.type}
        />

        <label htmlFor="owner">Propietario: </label>
        <input
          type="text"
          id="owner"
          name="owner"
          {...register("owner")}
          defaultValue={defaultValues.owner}
          
        />
        <label htmlFor="contact">Contacto: </label>
        <input
          type="text"
          id="contact"
          name="contact"
          {...register("contact")}
          defaultValue={defaultValues.contact}
          
        />

        <label htmlFor="searchCouple">¿Busca pareja?<br></br>Incluya 'inlove' si no busca o 'single' si busca pareja </label>
        <input
          type="text"
          id="searchCouple"
          name="searchCouple"
          {...register("searchCouple")}
          defaultValue={defaultValues.searchCouple}
        />

        <label htmlFor="description"> Description </label>
        <textarea
          className="container_description"
          type="text"
          id="description"
          name="description"
          cols="30"
          rows="6"
          {...register("description")}
          defaultValue={defaultValues.description}
        />

        <button type="submit">Edit Profile</button>
      </form>
      <button onClick={() => deleteAnimal()}>Delete</button>
    </section>
  );
};

export default Profile;
