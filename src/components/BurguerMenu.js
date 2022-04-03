import menuBars from "../assets/svgs/menuBars.svg"

const BurguerMenu = ({handleOpenPanel}) =>{
    return(
        <>
            <img className="w-7 mx-4" src={menuBars} alt="Menu Bar" onClick={handleOpenPanel}/>
        </>
    )
}

export default BurguerMenu