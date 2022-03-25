import CartWidget from "./CartWidget";
import Logo from "./Logo";
import Nav from "./Nav";

const NavBar = () =>{
    return(
        <>
            <nav className= "grid grid-cols-3 pt-4 ">
                <Logo/>
                <CartWidget/>
                <Nav/>
            </nav>
        </>
    )
}

export default NavBar; 