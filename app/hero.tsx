import { BaseInfo } from "@/data/data"
import { FaDownload } from "react-icons/fa"
import Image from "next/image"
import sajid2 from "../public/images/sajid2.png"
import { url } from "inspector"

function Hero(){
    return(
        <section id="home"><div className="w-full pt-[4vh] md:pt-[12vh] h-screen overflow-hidden relative" style={{backgroundImage:"url('/images/paged.png')"}}>
            <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* text content */}
            <div>
                {/* sub heading */}
                <h1 data-aos="fade-left" className="text-2xl md:text-3xl lg:text-4xl mb-5 text-[#BFA181] font-semibold">I am {BaseInfo.name}</h1>
                {/* title */}
                <h1 data-aos="fade-right" data-aos-delay="100" className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading[4rem] text-white">{BaseInfo.position}</h1>
                {/* student */}

                <h1 data-aos="fade-right" data-aos-delay="100" className="text-bg text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading[4rem] text-white">{BaseInfo.student}</h1>

                {/* discription */}
                <p data-aos="fade-left" data-aos-delay="200" className="mt-6 text-sm md:text-base text-[#BFA181] text-opacity-60">{BaseInfo.Discription}</p>
                {/* button */}
                <button data-aos="zoom-in" data-aos-delay="300" className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-gradient-to-r from-[#178582] to-[#043533] hover:bg-[#178581cc] flex items-center space-x-2">
                    <span>Download CV</span>
                    <FaDownload/>
                </button>
            </div>
            {/* image content */}
            <div data-aos="zoom-in" data-aos-delay="400" className="mx-auto lg:block rounded-[3rem] border-[3.5px] border-[#BFA181] border-opacity-50 overflow-x-hidden">
                <Image src={sajid2} alt={BaseInfo.name} width={400} height={450}/>
            </div>
            </div>

            </div>
        </div></section>
    )
}
export default Hero