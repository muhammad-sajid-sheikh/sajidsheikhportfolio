"use client";
import Tilt from "react-parallax-tilt"
import Image from "next/image";

type Props = {
    service: {
        id: number;
        title: string;
        description: string;
        icon: string;
    };
    
};

function Servicecard({service}:Props){
    console.log(service)
    return <Tilt className="shadow 2xl p-6 rounded-lg bg-gradient-to-r from-[#b98694] to-[#a58d93]">
        <Image src={`${service.icon}`} alt={service.title} width={50} height={50}/>
        <h1 className="mt-4 text-lg font-bold text-[#02060B]">{service.title}</h1>
        <p className="mt-3 text-sm text-[#030B14] text-opacity-80">{service.description}</p>
    </Tilt>
    
}
export default Servicecard