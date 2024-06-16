import Link from "next/link"

const Navbar =()=>{
    return (
        <nav className="flex items-center justify-between">
            <div>
                <Link href={'/'} className="font-bold sm:text-md md:text-xl">Job Board</Link>
            </div>
            <div className="flex gap-4 *:py-1 *:px-4 *:rounded-md">
                <Link href={'/login'} className="bg-gray-200 sm:text-sm md:text-lg">Login</Link>
                <Link href={'/new-listing'} className="bg-blue-600 text-white sm:text-sm md:text-lg">Post a job</Link>
            </div>
        </nav>
    )
}

export default Navbar