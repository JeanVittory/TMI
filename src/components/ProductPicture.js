// import productImage from '../assets/redsuncult_assets/red_sun_tshirt_black.png'

const productPicture = ({picture, name, price}) =>{
    return(
        <>
            <div className='flex flex-col  justify-center items-center'>
                <img src={picture} alt="Camisa Negra con Logo" className='w-8/12 lg:w-full'/>
            </div>
            <div className='flex flex-col  justify-center items-center'>
                <p className=' w-8/12  lg:w-full  font-Mono  text-sm  pt-3  text-left'>
                    {name}
                </p>
                <p className='w-8/12  lg:w-full  font-Mono  text-sm  text-left'>
                    {price}
                </p>
            </div>
        </>
    );
};

export default productPicture;