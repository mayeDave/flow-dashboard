import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 350 },
  { month: "Sep", balance: 600 },
  { month: "Oct", balance: 800 },
  { month: "Nov", balance: 450 },
  { month: "Dec", balance: 700 },
  { month: "Jan", balance: 650 },
];

export default function BalanceHistory() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">

      <h3 className="font-semibold text-slate-900 mb-4">
        Balance History
      </h3>

      <div className="h-52">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}
