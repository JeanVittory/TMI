import imageError from '../assets/redsuncult_assets/404error.jpg'
import { useNavigate } from 'react-router-dom';

const Error404 = () =>{
    let navigate = useNavigate();

    const handleNavigate = () =>{
        navigate('/')
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={imageError} alt='Error 404' className='w-1/2'/>
            <button className='border border-black p-2 bg-black text-white font-Mono letter tracking-widest' onClick={handleNavigate}>Get me out</button>
        </div>
    );
};

export default Error404;