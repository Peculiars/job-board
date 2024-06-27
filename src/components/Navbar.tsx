import Link from "next/link"
import Container from "./Container"
import { getUser, getSignInUrl, signOut } from "@workos-inc/authkit-nextjs"

const Navbar = async()=>{

    const {user} = await getUser();
    const signIn = await getSignInUrl();
    return (
        <nav>
            <Container className="flex items-center justify-between">
            <div>
                <Link href={'/'} className="font-bold sm:text-md md:text-xl">Job Board</Link>
            </div>
            <div className="flex gap-4 *:py-1 *:px-4 *:rounded-md sm:text-sm md:text-md">
                {user ?  
                <form action={async () => {
	                'use server';
	                await signOut();
	                }}>
                        <button type="submit">Logout</button>
                </form>
                     
                : <Link href={signIn} className="bg-gray-200 ">Login</Link>
                }
                
                <Link href={'/new-listing'} className="bg-green-800 text-white">Post a job</Link>
            </div>
            </Container>
            
        </nav>
    )
}

export default Navbar