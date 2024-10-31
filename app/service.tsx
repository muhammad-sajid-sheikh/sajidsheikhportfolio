import SectionHeadding from "@/components/helper/SectionHeading"
import { servicesData } from "@/data/data"
import Servicecard from "./serviceCard"


function Service(){
    return(
        <div className="pt-16 pb-16"style={{backgroundImage:"url('/images/paged.png')"}}>
            <section id="services"><SectionHeadding>Services</SectionHeadding></section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[88%] mx-auto items-center mt-20">
                {servicesData.map((service,i)=>{
                    return <div key={service.id} data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`}>
                        <Servicecard service={service}/>

                        </div>
                })}
            </div>
        </div>
    )
}
export default Service