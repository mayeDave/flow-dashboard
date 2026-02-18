import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper } from "@mui/material";

const data = [
  { name: "Entertainment", value: 30, fill: "#2563eb" },
  { name: "Bill Expense", value: 15, fill: "#f97316" },
  { name: "Investment", value: 20, fill: "#10b981" },
  { name: "Others", value: 35, fill: "#6b7280" },
];

export default function ExpenseChart() {
  return (
    <Paper className="p-6 h-75 rounded-xl shadow-sm">
      <h2 className="mb-4 font-semibold">
        Expense Statistics
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          />

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}
