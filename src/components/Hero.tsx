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
                    <input type="search" placeholder="Search phrase..." className="border border-gray-400 w-full py-1 px-2 rounded-md outline-none"/>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
                </form>
            </Container>
        </header>
    )
}

export default Hero