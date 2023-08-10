import moment from "moment";
import Container from "./Container";
import CountrySelect from "./CountrySelect";

const MoreDetails = ({ data,setDaysCount }) => {

    const { forecast } = data;
    return (
        <Container>
            <div className="relative overflow-x-auto py-10">
                <div className="w-1/2 md:w-1/6 ml-auto py-3">
                    <CountrySelect setDaysCount={setDaysCount} />
                </div>
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Day
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Condition
                            </th>
                            <th scope="col" className="px-6 py-3">
                                humidity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Max Wind
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Temperature
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            forecast?.forecastday.map(day => <tr key={day.date} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {moment(day.date).format("MMM Do YY")}
                                </th>
                                <td className="px-6 py-4">
                                    {day.day?.condition?.text}
                                </td>
                                <td className="px-6 py-4">
                                    {day.day?.avghumidity}
                                </td>
                                <td className="px-6 py-4">
                                    {day.day?.maxwind_kph} Kph
                                </td>
                                <td className="px-6 py-4">
                                    {day.day?.avgtemp_c} &deg;C
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>

    );
};

export default MoreDetails;