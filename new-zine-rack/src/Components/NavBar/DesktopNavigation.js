import NavLinks from "./NavLinks";
import './NavBar.css';

function DesktopNavigation(){
    return(
        <nav className="DesktopNavigation">
            <h2 className="logo">Logo</h2>
            <NavLinks />
        </nav>
    )
}

export default DesktopNavigation;
