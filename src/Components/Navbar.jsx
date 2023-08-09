import sun from "../assets/Vector.svg"
import Container from "./Container";

const Navbar = () => {
    return (
        <nav className="bg-[#343A40] py-6 text-white w-full ">
            <Container>
                <div className="flex items-center justify-between w-full">
                    <div>
                        <img className="mx-auto" src={sun} alt="" />
                        <h2>WeatherApp</h2>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex justify-center">
                            <input type="text" id="default-input" className="w-1/2 bg-gray-5 text-gray-900 font-bold rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5" />
                            <button className="py-2.5 px-6 bg-[#EB6F4C] rounded-r-lg font-mono tracking-wide opacity-100 hover:opacity-90 transition-opacity">Submit</button>
                        </div>
                    </div>
                    <div className="w-32 text-center font-bold font-mono">
                        <div className="bg-white text-black py-2.5 w-full rounded-lg">C/F</div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;