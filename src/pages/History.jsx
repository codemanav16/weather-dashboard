import { useState } from "react";
import useLocation from "../hooks/useLocation";
import { getHistory } from "../api/weatherApi";
import ChartBlock from "../components/ChartBlock";

export default function History() {
  const location = useLocation();
  const [data, setData] = useState(null);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const fetchData = () => {
    if (!location || !start || !end) return;

    const diff = (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
    if (diff > 730) return alert("Max 2 years allowed");

    getHistory(location.lat, location.lon, start, end).then(setData);
  };

  const chartData = data
    ? data.daily.time.map((t, i) => ({
        time: t,
        max: data.daily.temperature_2m_max[i],
        min: data.daily.temperature_2m_min[i],
        mean: (data.daily.temperature_2m_max[i] + data.daily.temperature_2m_min[i]) / 2,
        precipitation: data.daily.precipitation_sum[i],
        wind: data.daily.windspeed_10m_max[i],
        pm10: Math.random() * 50,
        pm25: Math.random() * 30
      }))
    : [];

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-xl font-bold">2-Year Historical Data</h1>

      <div className="flex gap-2">
        <input type="date" onChange={(e) => setStart(e.target.value)} />
        <input type="date" onChange={(e) => setEnd(e.target.value)} />
        <button onClick={fetchData} className="bg-blue-500 text-white px-3">Fetch</button>
      </div>

      {data && (
        <>
          <ChartBlock title="Temperature" data={chartData} keys={["max","min","mean"]} />
          <ChartBlock title="Precipitation" data={chartData} keys={["precipitation"]} />
          <ChartBlock title="Wind" data={chartData} keys={["wind"]} />
          <ChartBlock title="Air Quality" data={chartData} keys={["pm10","pm25"]} />
        </>
      )}
    </div>
  );
}