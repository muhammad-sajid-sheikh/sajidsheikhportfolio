import Image from "next/image";
// define Props type

type Props = {
    skill: {
        id: number;
        title: string;
        image: string;
        percentage: string;
    };
    
};

function Skillcard({skill}: Props){
    const { image,percentage,title } = skill;
    return(
        <div className="p-6 hover:bg-blue-900 duration-300 transition-all cursor-pointer text-center rounded-lg bg-gray-900">
            <Image src={image} alt="title" width={80} height={80} className="object-cover mx-auto" />
            <h1 className="text-[18px] mt-4 text-[#BFA181] font-[600]">{title}</h1>
            <div className="bg-gradient-to-r from-[#b98694] to-[#6b4f57] mt-4 rounded-lg p-2 text-[#02060B] font-bold opacity-95 ">{percentage}</div>
        </div>
    )
}
export default Skillcard