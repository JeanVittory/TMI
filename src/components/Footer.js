import '../App.css'
import facebook from '../assets/svgs/facebook _footer.svg'
import email from '../assets/svgs/email.svg'
import instagram from '../assets/svgs/instagram_footer.svg';
import bandcamp from '../assets/svgs/bandcamp_footer.svg';
import logo from '../assets/redsuncult_assets/logo.png';

const Footer = () =>{

    return(
     
            <footer className='bg-black mt-10'>
                <div className='container  mx-auto  flex flex-col md:flex-row justify-center items-center  '>

                    <div className='flex flex-col justify-center items-center'>

                        <div className='flex justify-center md:justify-start md:mt-10 '>
                            <img src={logo} alt='Logo' className='mt-3 w-1/4 md:w-3/12'/>
                        </div>
                    
                        <div className='flex  justify-center  md:justify-start items-center  mt-3  mb-10 w-full'>
                            <a href='/' className='cursor-default lg:cursor-pointer'><img src={instagram} alt='instagram' className='w-5 m-3'/></a>
                            <a href='/' className='cursor-default lg:cursor-pointer'><img src={facebook} alt='facebook' className='w-5  m-3'/></a>
                            <a href='/' className='cursor-default lg:cursor-pointer'><img src={bandcamp} alt='bandcamp' className='w-5  m-3'/></a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center order-first  md:order-last mt-10'>
                        <h2 className='font-Sans font-sm font-bold  text-white  tracking-wide'>
                            SUBSCRIBE FOR UPDATES
                        </h2>
                        <p className='font-Mono text-xs text-white  tracking-wider mt-3  text-center'>
                            Subscribe to get notified about future sales and updates!
                        </p>
                        <form  className='flex  justify-evenly items-center  border border-white max-w-xs  gap-4 mt-5 mb-5  md:mb-10'>
                            <button type='submit' className='text-white'><img src={email} alt='email' className='w-6 h-6 mx-3 my-2' /></button>
                            <input placeholder='Enter your Email' type='text' name='Email' id='e-mail' className='w-full bg-black font-Mono text-sm text-white'/>
                        </form>
                    </div>
                </div>
            </footer>
   
    );
};

export default Footer;