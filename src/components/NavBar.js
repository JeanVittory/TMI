import Logo from './Logo';
import Nav from './Nav';

const NavBar = () =>{

    return(
        <nav className= 'grid grid-cols-2 py-4 bg-black'>
            <Logo/>
            <Nav/>
        </nav>
    );
};

export default NavBar; 