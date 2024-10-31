import {ContactForm} from "./contactForm"
import ContactInfo from "./contactInfo"

function Contact(){
    return(
        <section id="contact"><div className="pt-16 pb-16" style={{backgroundImage:"url('/images/paged.png')"}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
                {/* contact form */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-center">
                    <ContactForm/>
                </div>
                {/* contact info */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-oas-delay="100" className="xl:mx-auto">
                    <ContactInfo/>
                </div>

            </div>
        </div></section>
    )
}
export default Contact