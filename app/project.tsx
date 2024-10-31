import SectionHeadding from "@/components/helper/SectionHeading"
import { ProjectData } from "@/data/data"
import Link from "next/link"
import Image from "next/image"

function Project(){
    return(
        <div className="pt-16 pb-16" style={{backgroundImage:"url('/images/pagel.png')"}}>
        <section id="project"><SectionHeadding>My Projects</SectionHeadding></section>
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            {ProjectData.map((project,i) =>{
                return(
                    <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`} key={project.id} className="bg-gradient-to-r from-[#b98694] to-[#a58d93] p-6 rounded-lg hover:scale-125 transition-all duration-300">
                        <Link href={project.url} target="_blank">
                        <Image src={project.image} alt="project" width={300} height={200} className="w-full"/>
                        </Link>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
export default Project