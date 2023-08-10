import { useRef } from "react";
import sun from "../assets/Vector.svg"
import Container from "./Container";

const Navbar = ({setCityName}) => {

    const inputRef = useRef(null)

    const handleSearch = (e) => {
        e.preventDefault()
        setCityName(inputRef.current.value)
    }
    return (
        <nav className="bg-[#343A40] py-6 text-white w-full">
            <Container>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <img className="mx-auto" src={sun} alt="" />
                        <h2>WeatherApp</h2>
                    </div>
                    <div className="w-full">
                        <form onSubmit={handleSearch} className="w-full flex justify-center">
                            <input ref={inputRef} placeholder="Name of city" type="text" id="default-input" className="w-3/6 bg-gray-5 text-gray-900 font-bold rounded-l-lg placeholder:pl-3 focus:ring-blue-500 focus:border-blue-500 p-2.5" />
                           
                            <button className="py-2.5 px-6 bg-[#EB6F4C] rounded-r-lg font-serif tracking-wide opacity-100 hover:opacity-90 transition-opacity">Search</button>
                        </form>
                    </div>
                    <div className="w-32 text-center font-bold font-serif">
                        <div className="bg-white text-black py-2.5 w-full rounded-lg">C/F</div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;