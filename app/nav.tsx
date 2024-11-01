"use client";
import Image from "next/image"
import logo2 from "../public/images/logo2.png"
import { HiBars3BottomRight } from "react-icons/hi2"
import { useEffect, useState } from "react";

// define props type

type Props = {
    openNav:()=>void
}



 



function Nav({openNav}:Props){

    const [navBg, setNavBg] = useState(false);

    useEffect(()=> {
        const handler = ()=>{
            if(window.scrollY >= 90){
                setNavBg(true)
            }if(window.scrollY <90){
                setNavBg(false);
            }
        }
        window.addEventListener("scroll",handler);
        return ()=>{
            window.removeEventListener("scroll",handler);
        }

    },[])
    


    return(
        <div className={`fixed ${ navBg ? "bg-[#030b14ad]": "fixed"} h-[6vh] z-[10] bg-black w-full transition-all duration-200`}>
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                {/* logo */}
               <Image src={logo2} alt="logo" className="w-[180px] h-[140px] ml-[-1.5rem] sm:ml-0"/>
               {/* nqv links */}
               <div className="flex items-center space-x-10">
                <div className="hidden lg:flex items-center space-x-8">

                    {/* isey link kaise krna hai samajh nahi a raha tha jbhi commit out kr dia */}
                    {/* {navlink.map((navlink)=>{
                    return <Link key={navlink.id} href={navlink.url}>
                        <p className="navlink">{navlink.label}</p>
                    </Link>
                })} */}
                <div className="navlink"><a href="#home">Home</a> </div>
                <div className="navlink"><a href="#about">About</a></div>
                <div className="navlink"><a href="#services">Services</a></div>
                <div className="navlink"><a href="#project">Projects</a></div>
                <div className="navlink"><a href="#skill">Skills</a></div>
                <div className="navlink"><a href="#reviews">Reviews</a></div>
                <div className="navlink"><a href="#contact">Contact</a></div>
               
                </div>
                {/* button */}
                <div className="flex items-center space-x-4">
                    <button className="md:px-5 md:py-1 px-3 py-0 text-white font-semibold sm:text-base text-sm bg-gradient-to-r from-[#178582] to-[#043533]
                    hover:bg-[#178581cc] transition-all duration-200 rounded-lg">
                        Hire Me
                    </button>
                    {/* burger */}
                    <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden "/>
                </div>
               </div>
            </div>

        </div>
    )
}

export default Nav