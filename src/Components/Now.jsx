import Container from "./Container";


const Now = ({ data }) => {
    const { condition, humidity, wind_kph, vis_km, pressure_in } = data.current
    return (
        <div className="bg-[#343A40] text-white py-10">
            <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 gap-x-3">
                <h1 className="text-white pl-5 text-2xl">Now</h1>
                <img className="w-16" src={condition?.icon} alt="" />
            </div>
            <Container>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-0 text-xl font-semibold text-center">
                    <div className="space-y-2 border lg:border-none border-[#EB6F4C] py-4 lg:py-0 rounded-lg">
                        <p>Condition</p>
                        <h3 className="text-[#EB6F4C]">{condition?.text}</h3>
                    </div>
                    <div className="space-y-2 border lg:border-none border-[#EB6F4C] py-4 lg:py-0 rounded-lg">
                        <p>humidity</p>
                        <h3>{humidity}</h3>
                    </div>
                    <div className="space-y-2 border lg:border-none border-[#EB6F4C] py-4 lg:py-0 rounded-lg">
                        <p>Wind Speed</p>
                        <h3>{wind_kph} Kph</h3>
                    </div>
                    <div className="space-y-2 border lg:border-none border-[#EB6F4C] py-4 lg:py-0 rounded-lg">
                        <p>Visibility</p>
                        <h3>{vis_km} Km</h3>
                    </div>
                    <div className="space-y-2 border lg:border-none border-[#EB6F4C] py-4 lg:py-0 rounded-lg">
                        <p>Pressure</p>
                        <h3>{pressure_in} In</h3>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Now;