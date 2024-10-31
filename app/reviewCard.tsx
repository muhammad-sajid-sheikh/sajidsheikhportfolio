import Image from "next/image";
import { FaStar } from "react-icons/fa";


// define props type

type Props = {
    review: {
        name: string;
        review: string;
        rating: number;
        profession: string;
        image: string;
    }
    
}


function Reviewcard({review}:Props){
    const {image, name, profession, rating, review:ClientReviews} = review;
    return(
        <div className="rounded-md overflow-hidden bg-[#02060B] m-4">
            <div className="p-6">
            <Image src="/images/qouteu.png" alt="image" width={20} height={20}/>
            <p className="text-[#BFA181] text-opacity-95">{ClientReviews}</p>
            <Image src="/images/qouteb.png" alt="image" width={20} height={20} className="ml-auto"/>
            </div>
            <div className="px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold">
            <span>{rating}/5</span>
            <FaStar className="text-yellow-500"/>
            </div>
            <div className="bg-gradient-to-r from-[#b98694] to-[#a58d93]">
                <div className="p-6 flex items-center space-x-6">
                    <div>
                        <Image src={image} alt={name} width={40} height={40} className="rounded-full"/>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-[#02060B]">{name}</h1>
                        <p className="text-base text-[#02060B]">{profession}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reviewcard