import styles from "./Navbar.module.css"
import { FaTasks,FaCheck ,FaHourglassStart} from "react-icons/fa";


const Navbar = ({onFilter}) => {
  return (
    <nav className={styles.nav}>
      <button onClick={()=>onFilter("all")}><FaTasks/></button>
      <button onClick={()=>onFilter("completed")}><FaCheck/></button>
      <button onClick={()=>onFilter("unCompleted")}><FaHourglassStart/></button>
    </nav>
  );
};

export default Navbar;
