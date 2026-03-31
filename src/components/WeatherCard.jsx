export default function WeatherCard({ data }) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <div className="card">Temp: {data.current_weather.temperature}°C</div>
      <div className="card">Max: {data.daily.temperature_2m_max[0]}°C</div>
      <div className="card">Min: {data.daily.temperature_2m_min[0]}°C</div>
      <div className="card">Humidity: {data.hourly.relative_humidity_2m[0]}%</div>
      <div className="card">UV Index: {data.daily.uv_index_max[0]}</div>
      <div className="card">Wind: {data.current_weather.windspeed}</div>
      <div className="card">Sunrise: {data.daily.sunrise[0]}</div>
      <div className="card">Sunset: {data.daily.sunset[0]}</div>
    </div>
  );
}