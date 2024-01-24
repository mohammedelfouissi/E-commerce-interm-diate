import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { Usersprov } from '../App';
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = ({ handleInputChange, query }) => {
  const { logged } = useContext(Usersprov);
  const { SetLogged } = useContext(Usersprov);
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search product ..."
        />
         
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <Link to={'/Register'}>
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
        {logged && <Link to="/"><button onClick={()=>SetLogged(false)} class="btn btn-outline-danger mx-4">Logout</button></Link>}
        
      </div>
    </nav>
  );
};

export default Nav;