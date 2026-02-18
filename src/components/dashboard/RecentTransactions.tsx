import {
  MdCreditCard,
  MdAccountBalanceWallet,
  MdPerson,
} from "react-icons/md";

const data = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    negative: true,
    icon: <MdCreditCard size={18} />,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    icon: <MdAccountBalanceWallet size={18} />,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    icon: <MdPerson size={18} />,
    bg: "bg-teal-100",
    color: "text-teal-600",
  },
];

export default function RecentTransactions() {
  return (
    <div className="bg-white min-h-48 rounded-2xl px-6 py-3 shadow-sm">

      

      <div className="space-y-4">

        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
          >
            {/* Left */}
            <div className="flex items-center gap-4">

              {/* Icon */}
              <div
                className={`h-11 w-11 rounded-full flex items-center justify-center ${item.bg} ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {item.title}
                </p>

                <p className="text-xs text-slate-400 mt-0.5">
                  {item.date}
                </p>
              </div>
            </div>

            {/* Amount */}
            <span
              className={`text-sm font-semibold ${
                item.negative
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {item.amount}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
