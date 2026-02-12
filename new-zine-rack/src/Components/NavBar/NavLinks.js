import './NavBar.css';

function NavLinks({isClicked, closeMenu}){
    return(
        <nav className="NavLinks">
        <ul>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/">Home</a>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/#services">Services</a>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/#about">About Us</a>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <a href="/#contact">Contact Us</a>
            </li>
        </ul>
    </nav>
    )
}

export default NavLinks;
