import Container from "./Container"

const Hero =()=>{
    return(
        <header>
            <Container className="mt-20 mb-10">
                <div className=" text-gray-800 max-w-lg mx-auto">
                    <h1 className="sm:text-5xl md:text-7xl font-bold text-center">Find your next dream job</h1>
                    {/* <p className="sm:text-sm md:text-md py-5 text-center text-balance">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolore saepe nam. Quaerat laborum incidunt vitae impedit, vero quae vel, culpa minus pariatur quibusdam aperiam nemo non dolores. Necessitatibus, maiores?</p> */}
                </div>
                <form action="" className="flex gap-2 max-w-lg mx-auto my-7">
                    <input type="search" placeholder="Search phrase..." className="border border-green-800 w-full py-1.5 px-4 rounded-tl-md rounded-br-md outline-none"/>
                    <button className="bg-green-800 text-white py-1 px-4 rounded-tl-md rounded-br-md">Search</button>
                </form>
            </Container>
        </header>
    )
}

export default Hero