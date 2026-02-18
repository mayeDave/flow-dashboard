import { MdCreditCard } from "react-icons/md";

type Props = {
  dark?: boolean;
};

function BankCard({ dark }: Props) {
  return (
    <div
      className={`
        relative
        h-48
        w-full
        rounded-2xl
        overflow-hidden
        shadow-lg
        transition
        ${
          dark
            ? "bg-linear-to-br from-slate-900 via-slate-800 to-black text-white"
            : "bg-white text-slate-900 border border-slate-200"
        }
      `}
    >
      {/* Glass overlay (only for dark card) */}
      {dark && (
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
      )}

      <div className="relative p-6 h-full flex flex-col justify-between">

        {/* TOP */}
        <div className="flex justify-between items-start">

          <div>
            <p
              className={`
                text-xs
                font-medium
                ${
                  dark
                    ? "text-white/70"
                    : "text-slate-500"
                }
              `}
            >
              Balance
            </p>

            <h2 className="text-2xl font-bold mt-1 tracking-tight">
              $5,756
            </h2>
          </div>

          <MdCreditCard
            size={28}
            className={
              dark
                ? "text-white/80"
                : "text-slate-400"
            }
          />

        </div>

        {/* MIDDLE */}
        <div className="flex justify-between text-sm">

          <div>
            <p
              className={`
                text-[10px]
                tracking-wider
                uppercase
                ${
                  dark
                    ? "text-white/60"
                    : "text-slate-400"
                }
              `}
            >
              Card Holder
            </p>

            <p className="font-medium mt-1">
              Eddy Cusuma
            </p>
          </div>

          <div>
            <p
              className={`
                text-[10px]
                tracking-wider
                uppercase
                ${
                  dark
                    ? "text-white/60"
                    : "text-slate-400"
                }
              `}
            >
              Valid Thru
            </p>

            <p className="font-medium mt-1">
              12/22
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex justify-between items-center">

          <p
            className={`
              tracking-widest
              text-sm
              font-medium
              ${
                dark
                  ? "text-white"
                  : "text-slate-700"
              }
            `}
          >
            3778 **** **** 1234
          </p>

          {/* Mastercard */}
          <div className="relative flex items-center">

            <span className="h-6 w-6 rounded-full bg-red-500/90" />

            <span className="-ml-3 h-6 w-6 rounded-full bg-orange-400/90" />

          </div>

        </div>

      </div>
    </div>
  );
}

export default function Cards() {
  return (
    <div
      className="
        flex
        gap-4
        overflow-x-auto
        pb-2
        snap-x
        snap-mandatory

        sm:grid
        sm:grid-cols-2
        sm:overflow-visible
        sm:snap-none
      "
    >

      <div className="min-w-70 snap-start">
        <BankCard dark />
      </div>

      <div className="min-w-70 snap-start">
        <BankCard />
      </div>

    </div>
  );
}

