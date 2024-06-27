import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { ReactNode } from "react"

declare interface ContainerProps{
    className?: string
    children: ReactNode
}

declare interface JobRowsProps{
    imgSrc: StaticImport
    companyName: string
    position: string
    location: string
    mode: string
    duration: string
    time: string
}