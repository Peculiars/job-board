import { JobRowsProps } from "@/types"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const JobRow =({imgSrc, companyName, position, duration, jobType, time, location}: JobRowsProps)=>{
    return(
        <div className="bg-white sm:p-4 md:p-6 rounded-lg shadow-sm flex sm:gap-3 md:gap-4 relative">
            <div className="absolute top-4 right-6">
                <FontAwesomeIcon className="size-4 text-gray-400 cursor-pointer" icon={faHeart} />
            </div>
            <div className="content-center">
                <Image src={imgSrc} alt={`${companyName}logo`} className="size-12"/>
            </div>
            <div className="grow flex sm:flex-col md:flex-row">
                <div className="grow">
                <div className="text-gray-500 text-sm">{companyName}</div>
                <div className="font-bold mb-1">{position}</div>
                <div className="text-gray-500 text-xs">{jobType} &middot; {location} &middot; {duration}</div>
                </div>
                <div className="content-end text-gray-500 text-xs font-medium sm:pt-1 md:pt-0">{time}</div>
            </div>
            
        </div>
    )
}

export default JobRow