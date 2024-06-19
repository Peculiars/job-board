import Link from "next/link"
import Container from "./Container"

const Navbar =()=>{
    return (
        <nav>
            <Container className="flex items-center justify-between">
            <div>
                <Link href={'/'} className="font-bold sm:text-md md:text-xl">Job Board</Link>
            </div>
            <div className="flex gap-4 *:py-1 *:px-4 *:rounded-md sm:text-sm md:text-md">
                <Link href={'/login'} className="bg-gray-200 ">Login</Link>
                <Link href={'/new-listing'} className="bg-blue-600 text-white">Post a job</Link>
            </div>
            </Container>
            
        </nav>
    )
}

export default Navbar