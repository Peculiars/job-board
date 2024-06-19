import Container from "./Container"
import JobRow from "./JobRow"
import sportify from "../../public/assets/pngegg.png"

const Jobs=()=>{
    return(
        <section className="bg-gray-100 p-8 rounded-2xl">     
            <Container>
                <div >
                    <h2 className="font-bold mb-4">Recent jobs</h2>
                    <div className="flex flex-col gap-4">
                        <JobRow imgSrc={sportify} companyName="Sportify" position="Product Designer" jobType="Remote" location="New York, US" duration="Full-time" time="2 weeks ago"/>
                        <JobRow imgSrc={sportify} companyName="Sportify" position="Product Designer" jobType="Remote" location="New York, US" duration="Full-time" time="2 weeks ago"/>
                        <JobRow imgSrc={sportify} companyName="Sportify" position="Product Designer" jobType="Remote" location="New York, US" duration="Full-time" time="2 weeks ago"/>
                        <JobRow imgSrc={sportify} companyName="Sportify" position="Product Designer" jobType="Remote" location="New York, US" duration="Full-time" time="2 weeks ago"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Jobs