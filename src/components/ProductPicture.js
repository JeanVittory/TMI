import productImage from '../assets/redsuncult_assets/camisa_1.png'

const productPicture = () =>{
    return(
        <>
            <div className='flex flex-col  justify-center items-center'>
                <img src={productImage} alt="Camisa Negra con Logo" className='w-8/12 lg:w-full'/>
            </div>
            <div className='flex flex-col  justify-center items-center'>
                <p className=' w-8/12  lg:w-full  font-Mono  text-sm  pt-3  text-left'>
                    Classic Red Sun Cult - Black
                </p>
                <p className='w-8/12  lg:w-full  font-Mono  text-sm  text-left'>
                    $12.00
                </p>
            </div>
        </>
    );
};

export default productPicture;