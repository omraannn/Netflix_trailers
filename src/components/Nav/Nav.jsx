import { useEffect, useRef } from "react";
import "./nav.scss";
import logo from "../../../public/logo1.jpg"
import tools from "../../services/tools/tools";
import { Link } from "react-router-dom";


const Nav = () => {

    const navRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', () => { 
            if(window.scrollY > 100 ) {
                tools.handleShow(navRef, true)
            }else tools.handleShow(navRef, false);
         })
    },[])

  return (
    <div ref={navRef} className="nav">
      <Link to="/client/home">
        <h1 className="nav__logo"> 
            <img src={logo} alt="" width={50} />
        </h1>
      </Link>
      <Link to="/client/profile">
        <img
          src="https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
          alt="Netflix Avatar"
          className="nav__avatar"
        />
      </Link>
    </div>
  );
};

export default Nav;