import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper } from "@mui/material";

const data = [
  { day: "Sat", deposit: 250, withdraw: 400 },
  { day: "Sun", deposit: 120, withdraw: 300 },
  { day: "Mon", deposit: 300, withdraw: 350 },
  { day: "Tue", deposit: 450, withdraw: 380 },
  { day: "Wed", deposit: 200, withdraw: 150 },
  { day: "Thu", deposit: 380, withdraw: 420 },
  { day: "Fri", deposit: 320, withdraw: 360 },
];

export default function WeeklyActivity() {
  return (
    <Paper className="p-6 h-75 rounded-xl shadow-sm">
      <h2 className="mb-4 font-semibold">
        Weekly Activity
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="deposit" fill="#2563eb" />
          <Bar dataKey="withdraw" fill="#9ca3af" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
