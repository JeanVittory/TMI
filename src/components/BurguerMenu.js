import menuBars from "../assets/svgs/menuBars.svg"
import PropTypes from 'prop-types'

const BurguerMenu = ({handleOpenPanel}) =>{
    return(
        <div>
            <img className="w-7 mx-4" src={menuBars} alt="Menu Bar" onClick={handleOpenPanel}/>
        </div>
    )
}

export default BurguerMenu

BurguerMenu.propTypes = {
    handleOpenPanel: PropTypes.func
}