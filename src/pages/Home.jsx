import { useEffect, useState, useMemo } from "react";
import useLocation from "../hooks/useLocation";
import { getWeather } from "../api/weatherApi";
import ChartBlock from "../components/ChartBlock";

export default function Home() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
    if (location) getWeather(location.lat, location.lon).then(setData);
  }, [location]);

  const charts = useMemo(() => {
    if (!data) return {};

    const map = (arr) => data.hourly.time.map((t, i) => ({
      time: t.slice(11, 16),
      value: unit === "C" ? arr[i] : (arr[i] * 9) / 5 + 32
    }));

    return {
      temp: map(data.hourly.temperature_2m),
      humidity: map(data.hourly.relative_humidity_2m),
      rain: map(data.hourly.precipitation),
      wind: map(data.hourly.windspeed_10m),
      visibility: map(data.hourly.visibility),
      pm10: map(data.hourly.pm10),
      pm25: map(data.hourly.pm2_5)
    };
  }, [data, unit]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4 space-y-6">
      <button onClick={() => setUnit(unit === "C" ? "F" : "C")}
        className="bg-blue-500 text-white px-3 py-1 rounded">
        Toggle °C / °F
      </button>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="card">Temp: {data.current_weather.temperature}°C</div>
        <div className="card">Max: {data.daily.temperature_2m_max[0]}</div>
        <div className="card">Min: {data.daily.temperature_2m_min[0]}</div>
        <div className="card">Humidity: {data.hourly.relative_humidity_2m[0]}</div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <ChartBlock title="Temperature" data={charts.temp} keys={["value"]} />
        <ChartBlock title="Humidity" data={charts.humidity} keys={["value"]} />
        <ChartBlock title="Precipitation" data={charts.rain} keys={["value"]} />
        <ChartBlock title="Wind" data={charts.wind} keys={["value"]} />
        <ChartBlock title="Visibility" data={charts.visibility} keys={["value"]} />
        <ChartBlock title="PM10" data={charts.pm10} keys={["value"]} />
        <ChartBlock title="PM2.5" data={charts.pm25} keys={["value"]} />
      </div>
    </div>
  );
}