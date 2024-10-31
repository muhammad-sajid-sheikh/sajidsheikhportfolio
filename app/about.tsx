import SectionHeadding from "@/components/helper/SectionHeading"
import { AboutInfo } from "@/data/data"
import { FaCheck } from "react-icons/fa"
import Image from "next/image"
import customer from "../public/images/customer.png"
import experience from "../public/images/experience .png"
import completed from "../public/images/completed.png"
import rocket from "../public/images/rocket.png"

function About(){
    return(
        <div className="pt-16 pb-16 " style={{backgroundImage:"url('/images/pagel.png')"}}>

          <section id="about"><SectionHeadding>About Me</SectionHeadding></section>
          <div  className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20 ">
            {/* text content */}
            <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-200">{AboutInfo.title}</h1>
                <p className="mt-6 text-base text-[#BFA181]">{AboutInfo.discription}</p>
                <div className=" mt-8">
                    <div className="flex items-center space-x-2 mb-6">
                    <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                        <FaCheck className="text-white"/>
                    </div>
                    <p className=" text-sm sm:text-base md:text-lg font-bold text-[#BFA181]">Frontend Development</p>
                    </div>

                    <div className="flex items-center space-x-2 mb-6">
                    <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                        <FaCheck className="text-white"/>
                    </div>
                    <p className=" text-sm sm:text-base md:text-lg font-bold text-[#BFA181]">Backend Development</p>
                    </div>

                    <div className="flex items-center space-x-2 mb-6">
                    <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                        <FaCheck className="text-white"/>
                    </div>
                    <p className=" text-sm sm:text-base md:text-lg font-bold text-[#BFA181]">Full Stack Development</p>
                    </div>
                </div>
            </div>
            {/* stats content */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="150" className=" grid grid-cols-2 gap-16 items-center lg:mx-auto">
                {/* 1st stat */}
                <div>
                    <Image src={customer} alt="image" width={80} height={80} className="mx-auto"/>
                    <p className="mt-3 font-bold text-xl text-[#BFA181] text-center">{AboutInfo.client}</p>
                    <p className="text-base sm:text-lg text-[#BFA181] text-center">Satisfied Customers</p>
                </div>
                {/* 2nd stat */}
                <div>
                    <Image src={experience} alt="image" width={120} height={80} className="mx-auto"/>
                    <p className="mt-3 font-bold text-xl text-[#BFA181] text-center">{AboutInfo.experience}</p>
                    <p className="text-base sm:text-lg text-[#BFA181] text-center">Year Experience</p>
                </div>
                {/* 3rd stat */}
                <div>
                    <Image src={completed} alt="image" width={80} height={80} className="mx-auto"/>
                    <p className="mt-3 font-bold text-xl text-[#BFA181] text-center">{AboutInfo.project}</p>
                    <p className="text-base sm:text-lg text-[#BFA181] text-center">Completed Project</p>
                </div>
                {/* 4th stat */}
                <div>
                    <Image src={rocket} alt="image" width={35} height={70} className="mx-auto"/>
                    <p className="mt-3 font-bold text-xl text-[#BFA181] text-center">{AboutInfo.website}</p>
                    <p className="text-base sm:text-lg text-[#BFA181] text-center">Website Launched</p>
                </div>
            </div>
          </div>
        </div>
    )
}
export default About