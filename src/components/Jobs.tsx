import Container from "./Container"
import JobRow from "./JobRow"
import sportify from "../../public/assets/sportify.png"
import google from "../../public/assets/google.png"
import amazon from "../../public/assets/amazon.png"
import netflix from "../../public/assets/netflix.png"

const Jobs=()=>{
    return(
        <section className="bg-gray-100 p-8 rounded-2xl">     
            <Container>
                <div >
                    <h2 className="font-bold mb-4">Recent jobs</h2>
                    <div className="flex flex-col gap-4">
                        <JobRow imgSrc={sportify} companyName="Sportify" position="Product Designer" mode="Remote" location="New York, US" duration="Full-time" time="2 seconds ago"/>
                        <JobRow imgSrc={amazon} companyName="Amazon" position="Devops" mode="Hybrid" location="Moscow, RU" duration="Contract" time="5 minutes ago"/>
                        <JobRow imgSrc={google} companyName="Google" position="Software Engineer" mode="Onsite" location="Ontario, CA" duration="Part-time" time="3 hours ago"/>
                        <JobRow imgSrc={netflix} companyName="Netflix" position="Backend Developer" mode="Hybrid" location="California, US" duration="6 months" time="2 days ago"/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Jobs