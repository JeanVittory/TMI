// import productImage from '../assets/redsuncult_assets/red_sun_tshirt_black.png'

const productPicture = ({picture, name, price}) =>{
    return(
        <>
            <div className='flex justify-center items-center w-full md:h-80 md:w-80'>
                <img src={picture} alt="Camisa Negra con Logo" className=' w-4/5 md:h-full md:w-auto '/>
            </div>
            <div className='flex flex-col  justify-center items-center'>
                <p className=' w-8/12  lg:w-full  font-Mono  text-sm  pt-3  text-left'>
                    {name}
                </p>
                <p className='w-8/12  lg:w-full  font-Mono  text-sm  text-left'>
                    ${price.toFixed(2) }
                </p>
            </div>
        </>
    );
};

export default productPicture;