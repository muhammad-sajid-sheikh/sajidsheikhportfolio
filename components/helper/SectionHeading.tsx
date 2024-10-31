import { ReactNode } from "react"

// define props type
type Props = {
    children : ReactNode
}

function SectionHeadding({children}:Props){
    return(
        <h1 className="bg-gradient-to-r from-[#178582] to-[#043533] w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl
        uppercase -rotate-6">{children}</h1>
    )
}
export default SectionHeadding