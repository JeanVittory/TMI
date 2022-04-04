import menuBars from "../assets/svgs/menuBars.svg"

const BurguerMenu = ({handleOpenPanel}) =>{
    return(
        <div>
            <img className="w-7 mx-4" src={menuBars} alt="Menu Bar" onClick={handleOpenPanel}/>
        </div>
    )
}

export default BurguerMenu