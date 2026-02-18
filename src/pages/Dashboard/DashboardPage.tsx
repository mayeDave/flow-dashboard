import PageLayout from "../../components/layout/PageLayout";

import Cards from "../../components/dashboard/Cards";
import Transactions from "../../components/dashboard/RecentTransactions";
import WeeklyActivity from "../../components/dashboard/WeeklyActivity";
import ExpenseChart from "../../components/dashboard/ExpenseChart";
import QuickTransfer from "../../components/dashboard/QuickTransfer";
import BalanceHistory from "../../components/dashboard/BalanceHistory";

export default function DashboardPage() {
  return (
    <PageLayout>
      <div className="space-y-10">

        {/* ================= CARDS + TRANSACTIONS ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT: CARDS */}
          <div className="lg:col-span-2 space-y-4">

            {/* Cards Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-base md:text-lg font-semibold text-slate-800">
                My Cards
              </h2>

              <button className="text-sm text-indigo-600 hover:underline">
                See All
              </button>
            </div>

            {/* Cards */}
            <Cards />
          </div>

          {/* RIGHT: TRANSACTIONS */}
          <div className="space-y-4">

            {/* Transactions Header */}
            <h2 className="text-base md:text-lg font-semibold text-slate-800">
              Recent Transaction
            </h2>

            <Transactions />
          </div>

        </section>

        {/* ================= CHARTS ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <WeeklyActivity />

          <ExpenseChart />

        </section>

        {/* ================= QUICK + BALANCE ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <QuickTransfer />

          <BalanceHistory />

        </section>

      </div>
    </PageLayout>
  );
}
