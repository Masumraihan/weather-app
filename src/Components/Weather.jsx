import moment from "moment/moment";
import Container from "./Container";
import { FaCloudRain } from "react-icons/fa"

const Weather = ({ data }) => {
    const { location, forecast, current} = data;
    const allHours = forecast?.forecastday[1]?.hour;
    const hours = allHours?.filter((hour) => allHours.indexOf(hour) % 6 === 0);
    return (
        <section>
            <Container>
                <div className="grid md:grid-cols-4 lg:grid-cols-6 py-20">
                    <div className=" md:col-span-4 md:mb-6 lg:mb-0 text-center lg:text-start lg:col-span-2">
                        <h3 className="text-2xl font-semibold">
                            {location?.name}
                        </h3>
                        <p className="text-xl">{moment(location?.localtime).format("MMM Do YY")}</p>
                        <h1 className="text-7xl font-semibold">{current?.temp_c}&deg; C</h1>
                    </div>
                    {
                        hours?.map(hour => <div key={hour?.time} className="text-center lg:text-start border m-4 rounded-lg p-3 lg:p-0 border-[#EB6F4C] lg:border-none ">
                            <p className="text-2xl font-semibold">{moment(hour.time).format("LT")}</p>
                            <img className="w-16 mx-auto lg:mx-0" src={hour.condition?.icon} alt={hour.condition?.text} />
                            <p className="text-xl font-bold">{hour.temp_c}&deg;C</p>
                        </div>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Weather;