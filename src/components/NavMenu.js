import { NavLink } from 'react-router-dom';


const NavMenu = () =>{
    return(
        <div>
            <NavLink to="/" className={({isActive}) => isActive? 'font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  active':'font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  unactive'}>HOME</NavLink>
            <NavLink to="/faqs" className={({isActive}) => isActive? 'font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  active':'font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  unactive'}>FAQS</NavLink>
            <NavLink to="/contact"className={({isActive}) => isActive? 'font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  active':'font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  unactive'} >CONTACT</NavLink>
        </div>
    );
};

export default NavMenu;

