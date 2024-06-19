import { cn } from "@/lib/utils"
import { ContainerProps } from "@/types"

const Container=({className, children}: ContainerProps)=>{
    return(
        <div className={cn('h-full mx-auto w-full max-w-screen-lg px-2.5 py-4 md:px-20', className)}>
            {children}
        </div>
    )
}

export default Container