import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, Brush
} from "recharts";

export default function ChartBlock({ title, data, keys }) {
  return (
    <div className="card">

      <h2 className="font-bold mb-3">{title}</h2>

      {/* ✅ Horizontal Scroll */}
      <div className="overflow-x-auto">
        <div style={{ minWidth: "900px" }}>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>

              <XAxis dataKey="time" hide />
              <YAxis />
              <Tooltip />
              <Legend />

              {/* ✅ Multiple lines */}
              {keys.map((k, i) => (
                <Line key={i} dataKey={k} dot={false} />
              ))}

              {/* ✅ Zoom Feature */}
              <Brush
                dataKey="time"
                height={30}
                stroke="#8884d8"
              />

            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>
    </div>
  );
}