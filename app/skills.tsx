import SectionHeadding from "@/components/helper/SectionHeading"
import { SkillData } from "@/data/data"
import Skillcard from "./skillcard"

function Skills(){
    return(
        <div className="pt-16 pb-16 " style={{backgroundImage:"url('/images/paged.png')"}}>
            <section id="skill"><SectionHeadding>My Skills</SectionHeadding></section>
            <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
                {SkillData.map((skill, i)=>{
                    return <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`} key={skill.id}>
                        <Skillcard skill={skill}/>
                    </div>
                })}
            </div>

        </div>
    )
}
export default Skills