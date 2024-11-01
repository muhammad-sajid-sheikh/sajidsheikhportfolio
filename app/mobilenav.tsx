
import { CgClose } from "react-icons/cg"
import { FaHome } from "react-icons/fa"
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { SiPolymerproject } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { RiContactsBook3Fill } from "react-icons/ri";






// Props type
type Props ={
    showNav:boolean;
    closeNav:()=>void
};

function  MobileNav({closeNav,showNav,}:Props){
    // const router = useRouter();

    // const handleHomeClick = () => {
    //     router.push('/'); // Home page pe redirect karta hai
    //     closeNav();       // Mobile nav ko close karta hai
    //   };


    const navOpen = showNav ? "translate-x-[25%]" : "translate-x-[170%]";


     return(


        <div>
            {/* overlay */}
            <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen `}></div>
            {/* nav links */}
            <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center p-20 flex-col h-full w-[80%] sm:w-[60%] bg-black
             space-x-8 z-[10000]`}>
{/*             
                    {navlink.map((navlink)=>{
                    return <Link key={navlink.id} href={navlink.url}>
                        <p className="navlink text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                            {navlink.label}</p>
                    </Link>
                })} */}
            



                <div></div>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px]  border-white sm:text-[30px]"><a href="#home"><FaHome/>Home</a></div></button>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px] pt-6 border-white sm:text-[30px]"><a href="#about"><TbArrowRoundaboutRight/>About</a></div></button>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px] pt-6 border-white sm:text-[30px]"><a href="#services"><FaServicestack/>Services</a></div></button>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px] pt-6 border-white sm:text-[30px]"><a href="#project"><SiPolymerproject/>Projects</a></div></button>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px] pt-6 border-white sm:text-[30px]"><a href="#skill"><GiSkills/>Skills</a></div></button>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px] pt-6 border-white sm:text-[30px]"><a href="#reviews"><MdOutlineReviews/>Reviews</a></div></button>
                <button><div className="navlink text-[20px] ml-12 border-b-[1.5px] pt-6 border-white sm:text-[30px]"><a href="#contact"><RiContactsBook3Fill/>Contact</a></div></button>
                

              {/*  */}
              <CgClose onClick={closeNav} className="absolute top-[3rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white"/>
            </div>
        </div>
    )
}
export default MobileNav