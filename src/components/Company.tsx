import { getUser } from "@workos-inc/authkit-nextjs"
import { WorkOS } from "@workos-inc/node";
const Company = async()=>{
    const {user} = await getUser();
    const workos = new WorkOS(process.env.WORKOS_API_KEY)
    return(
        <div>
            <div>
                <h2 className="text-lg font-bold">Your companies</h2>
                <p className="text-xs text-gray-500">Select a company to create a job ad.</p>
                <p className="w-full bg-green-50 border p-6 mt-2 mb-6 text-sm shadow-sm">No companies found assigned to your user</p>
            </div>

            <div>
                <h2 className="text-lg font-bold">Create a new company</h2>
                <p className="text-xs text-gray-500">To create a job listing, you need to register a company</p>
            </div>
            <div className="my-5 flex gap-3">
                <input type="text" className="border border-green-700 rounded-tl-md rounded-br-md outline-none px-3 py-1" placeholder="company name" />
                <button className="bg-green-800 py-1 px-4 rounded-tl-md rounded-br-md text-white">Create Company </button>
            </div>
        </div> 
    )
}

export default Company