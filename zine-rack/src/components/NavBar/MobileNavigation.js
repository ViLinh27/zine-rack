import NavLinks from "./NavLinks";
import './NavBar.css';
import { TiThMenu } from "react-icons/ti";
import { IoIosCloseCircle } from "react-icons/io";

import { useState } from "react";

const MobileNavigation = () =>{
    const [click, setclick] = useState(false);
    const Hamburger = <TiThMenu className="HamburgerMenu"
            size="30px" color="black"
            onClick={() => setclick(!click)}/>
    const Close = <IoIosCloseCircle className="HamburgerMenu"
             size="30px" color="black"
            onClick={() => setclick(!click)} />
    const closeMenu = () => setclick(false);
    return(
        <nav className="MobileNavigation">
              <h2 className="logo">Logo</h2>
              { click ? Close : Hamburger} 
              {click && <NavLinks />}
              {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
         </nav>
    )
}

export default MobileNavigation;