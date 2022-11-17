import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavbarHome } from "../components/NavbarHome";

export const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <NavbarHome />
      <hr />
      <h2>Home</h2>
      <p>Aquí estará la página de inicio y pública de la aplicación</p>
      {/* <hr/> */}
    </div>
  );
};
