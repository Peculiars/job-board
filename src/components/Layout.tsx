import { cn } from "@/lib/utils"
import { LayoutProps } from "@/types"

const Layout=({className, children}: LayoutProps)=>{
    return(
        <main className={cn('container sm:p-4 md:px-10', className)}>
            {children}
        </main>
    )
}

export default Layout