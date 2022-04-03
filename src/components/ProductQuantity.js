import add from '../assets/svgs/add.svg'
import less from '../assets/svgs/less.svg'


const ProductQuantity = () =>{
    return(
        <div className="flex justify-center item-center">
            <div className='flex justify-between item-center w-2/5  md:w-3/4  mt-8  p-2  border-y  border-black'>
                <div className=" border  border-black rounded-full">
                    <img src={less} alt="Less" className='w-6'/>
                </div>
                <p>0</p>
                <div className="border  border-black  rounded-full">
                    <img src={add} alt="Plus" className='w-6'/>
                </div>
            </div>
        </div>
    );
};

export default ProductQuantity;