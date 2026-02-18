import Cards from "./Cards";
import RecentTransactions from "./RecentTransactions";

export default function MyCardsSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Cards (2 cols) */}
      <div className="lg:col-span-2">
        <Cards />
      </div>

      {/* Transactions (1 col) */}
      <RecentTransactions />

    </section>
  );
}
