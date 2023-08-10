import { useEffect, useState } from "react";
import MoreDetails from "../Components/MoreDetails";
import Navbar from "../Components/Navbar";
import Now from "../Components/Now";
import Weather from "../Components/Weather";
import { ScaleLoader } from "react-spinners";


const Main = () => {
    const [weatherData, setWeatherData] = useState({});
    const [cityName, setCityName] = useState("delhi");
    const [daysCount, setDaysCount] = useState(3)
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${cityName}&days=${daysCount}&aqi=no&alerts=yes`;
    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setWeatherData(data)
        })
    }, [url])


    return (
        <div className="w-full font-thin">
            <Navbar setCityName={setCityName} />
            {weatherData.location ? <>
                <Weather data={weatherData} />
                <Now data={weatherData} />
                <MoreDetails data={weatherData} setDaysCount={setDaysCount} />
            </> : <div className="w-full h-screen flex gap-y-4 flex-col pt-36 items-center">
                <h1 className="text-4xl font-semibold uppercase">Can not find city name</h1>
                <ScaleLoader color="#EB6F4C" />
            </div>
            }
        </div>
    );
};

export default Main;