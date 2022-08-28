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
    image: user.image
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("nick", data.nick);
    formData.append("age", data.age);
    formData.append("location", data.location);
    formData.append("type", data.type);
    formData.append("description", data.description);
    // formData.append("searchCouple", data.searchCouple);
    data.image[0]? (formData.append("image", data.image[0])
    ) : (
      <></>)
    
    API.patch(`/${user._id}`, formData).then((res) => {
      logout();
      if (res) {
        navigate("/login");
        Swal.fire("Profile edited, please log in again");
      }
    });
  };
  return (
    <section className="profile">
      <h2>Profile</h2>
      <img src={user.image} alt="User image" />
      <form onSubmit={handleSubmit(formSubmit)}>
        <input
          type="text"
          id="nick"
          name="nick"
          {...register("nick")}
          defaultValue={defaultValues.nick}
        />
        <input 
          type="file" 
          id="image" 
          name="image" 
          {...register("image")} 
          />

        <label htmlFor="age"> Edad </label>
        <input 
          type="text" 
          id="age" 
          name="age" 
          {...register("age")}
          defaultValue={defaultValues.age}/>
        

        <label htmlFor="location"> Location </label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          {...register("location")}
          defaultValue={defaultValues.location}/>
        

        <label htmlFor="type"> Type </label>
        <input 
          type="text" 
          id="type" 
          name="type" 
          {...register("type")}
          defaultValue={defaultValues.type}/>

        <label htmlFor="description"> Description </label>
        <textarea className="container_description" 
          type="text" 
          id="description" 
          name="description" 
          cols="30" 
          rows="6"
          {...register("description")}
          defaultValue={defaultValues.description}
          />

        {/* <label htmlFor="searchCouple">SearchCouple</label>
        <input type="radio" value="searchCouple"  {...register("searchCouple")}>Con pareja</input>
        <input type="radio" value="searchCouple" {...register("searchCouple")}>Soltero</input> */}


        <button type="submit">Edit Profile</button>
      </form>
    </section>
  );
};

export default Profile;
