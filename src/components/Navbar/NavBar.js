import Logo from "../Logo/Logo";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const NavBar = ({ data, setFeedbackFlag }) => {
  return (
    <nav className={styles.navbar}>
      <Link to="/"><Logo /></Link>
      <SearchBar data={data} placeholder="Search a song of your choice" />
      <Button text="Give Feedback" setFeedbackFlag={setFeedbackFlag} />
    </nav>
  );
};

export default NavBar;





// function NavBar({ searchData,setFeedbackFlag }) {
//   return (
//     <nav className={styles.navbar}>
//       <Link to="/">
//         <Logo />
//       </Link>
//       <SearchBar
//         placeholder="Search a song of your choice"
//         searchData={searchData}
//       />
//        <Button text="Give Feedback" setFeedbackFlag={setFeedbackFlag} />
//     </nav>
//   );
// }