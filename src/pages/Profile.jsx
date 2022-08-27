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
  };

  const formSubmit = (data) => {
    const formData = new FormData();
    formData.append("nick", data.nick);
    formData.append("image", data.image[0]);
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
        <input type="file" id="image" name="image" {...register("image")} />
        <button type="submit">Edit Profile</button>
      </form>
    </section>
  );
};

export default Profile;
