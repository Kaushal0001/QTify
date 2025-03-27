import logo from "../../assets/logo.png";
// import styles from "./Logo.module.css";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate("/")}
      src={logo}
      alt="logo"
      width={67}
      //className={styles.logo}
    />
  );
};

export default Logo;
