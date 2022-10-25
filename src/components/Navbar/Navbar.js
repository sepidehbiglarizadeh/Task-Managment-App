import styles from "./Navbar.module.css"
import { FaTasks,FaSearch,FaCheck ,FaHourglassStart} from "react-icons/fa";


const Navbar = ({onFilter}) => {
  return (
    <nav className={styles.nav}>
      <button ><FaSearch/></button>
      <button onClick={()=>onFilter("all")}><FaTasks/></button>
      <button onClick={()=>onFilter("completed")}><FaCheck/></button>
      <button onClick={()=>onFilter("unCompleted")}><FaHourglassStart/></button>
    </nav>
  );
};

export default Navbar;
