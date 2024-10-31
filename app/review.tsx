import SectionHeadding from "@/components/helper/SectionHeading"
import Slider from "./slider"

function Review(){
    return(
        <div className="pt-16 pb-16 " style={{backgroundImage:"url('/images/pagel.png')"}}>
            <section id="reviews"><SectionHeadding>Client Reviews</SectionHeadding></section>
            <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
            <Slider/>
            </div>
        </div>
    )
}
export default Review