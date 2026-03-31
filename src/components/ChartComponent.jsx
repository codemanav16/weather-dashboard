import {
  LineChart, Line, XAxis, YAxis, Tooltip
} from "recharts";

export default function ChartComponent({ data }) {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="temp" />
    </LineChart>
  );
}