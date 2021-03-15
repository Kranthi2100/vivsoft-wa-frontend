import { LineGraph } from "../../components";
import useWeatherService from "./useWeatherService";

function WeatherService() {
  const data = useWeatherService();

  return <LineGraph data={data} />;
}

export default WeatherService;
