"use client"
import About from "./about"
import Hero from "./hero"
import Service from "./service"
import Project from "./project"
import Skills from "./skills"
import Review from "./review"
import Contact from "./contact"
import Footers from "./footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react"

function Home(){

    useEffect(()=>{
        const initAOS = async()=>{
            await import("aos");
            AOS.init({
                duration:700,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom",
            })
        };
        initAOS();
    })

    return(
        <div>
           <Hero/> 
           <About/>
           <Service/>
           <Project/>
           <Skills/>
           <Review/>
           <Contact/>
           <Footers/>

        </div>
    )
}
export default Home