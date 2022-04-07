import logo from "../assets/redsuncult_assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () =>{
    return(
        <>
        <div className="w-28 container mx-auto ">
            <Link to='/home'><img src={logo} alt="logo de la empresa"/></Link>
        </div>
    </>   
    ); 
};

export default Logo;