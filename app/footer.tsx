import Image from "next/image"




function Footers(){
    return(
        <div className="pt-2 pb-2 " style={{backgroundImage:"url('/images/pagel.png')"}}>
            <div>
                <Image src="/images/logo3.png" alt="logo" width={180} height={180} className="mx-auto"/>
            </div>
            <div className="flex space-x-9 justify-center">
                <div><a href="https://www.facebook.com/MuhammadSajidSheikh121094/" target="blank"><Image src="/images/Facebook.png" alt="facebook" width={30} height={50} className="hover:scale-150 duration-300"/></a></div>
                <div><a href="https://www.linkedin.com/in/muhammad-sajid-sheikh-4530602b5" target="blank"><Image src="/images/linkedin.png" alt="linkedin" width={30} height={50} className="hover:scale-150 duration-300"/></a></div>
                <div><a href="https://www.instagram.com/invites/contact/?igsh=ldxk2pn8n2mh&utm_content=shc50sg" target="blank"><Image src="/images/insta.png" alt="insta" width={30} height={50} className="hover:scale-150 duration-300"/></a></div>
            </div>
            
            
            <div className="flex items-center flex-wrap justify-center space-y-2 text-white font-bold ">
                <div className="border-r-2 pr-5">Home.</div>
                <div className="border-r-2 pr-5 pl-5">About.</div>
                <div className="border-r-2 pl-5 pr-5">Services.</div>
                <div className="border-r-2 pl-5 pr-5">Projects.</div>
                <div className="border-r-2 pl-5 pr-5">Skills.</div>
                <div className="border-r-2 pl-5 pr-5">Reviews.</div>
                <div className=" pl-5">Contact.</div>
            </div>
        </div>
    )
}
export default Footers