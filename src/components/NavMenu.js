import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const NavMenu = ({handleSelect}) =>{
    return(
        <div>
            <Link to="/" className={`font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  active`} onClick={handleSelect}>HOME</Link>
            <Link to="/faqs" className={`font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide`} onClick={handleSelect}>FAQS</Link>
            <Link to="/contact" className={`font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide`} onClick={handleSelect}>CONTACT</Link>
        </div>
    );
};

export default NavMenu;

NavMenu.propTypes = {
    handleSelect: PropTypes.func
}