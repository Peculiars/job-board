import Company from "@/components/Company";
import Container from "@/components/Container";
import { getUser } from "@workos-inc/authkit-nextjs"

const Listing = async()=>{
    const {user} = await getUser();
    return(
        <Container>
            {user ? 
                <Company/>
                : 
                <div>
                    Sorry, You need to sign in before you can post a job!
                </div>
            }
        </Container>
    )
}

export default Listing