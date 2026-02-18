import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-slate-50 relative">

      {/* Sidebar (ALWAYS mounted) */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col w-full">

        <TopBar />

        <main className="flex-1 px-4 md:px-8 py-6 max-w-400 mx-auto w-full">
          {children}
        </main>

      </div>
    </div>
  );
}
