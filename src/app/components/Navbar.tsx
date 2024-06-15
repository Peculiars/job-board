import Link from "next/link"

const Navbar =()=>{
    return (
        <nav className="container flex items-center justify-between py-4 px-10 mx-auto">
            <div>
                <Link href={'/'} className="font-bold text-xl">Job Board</Link>
            </div>
            <div className="flex gap-4 *:py-1 *:px-4 *:rounded-md">
            <Link href={'/login'} className="bg-gray-200">Login</Link>
            <Link href={'/new-listing'} className="bg-blue-600 text-white">Post a job</Link>
            </div>
        </nav>
    )
}

export default Navbar