const NavMenu = ({handleSelect}) =>{
    return(
        <div>
            <a href="/" className={`font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide  active`} onClick={handleSelect}>HOME</a>
            <a href="/" className={`font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide`} onClick={handleSelect}>FAQS</a>
            <a href="/" className={`font-Sans  text-sm  text-white  align-middle  mx-4  tracking-wide`} onClick={handleSelect}>CONTACT</a>
        </div>
    );
};

export default NavMenu;