import { TrendingUp, BarChart3, Users } from "lucide-react";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const stats = [
  { label: "Website Traffic", value: "+320%", icon: BarChart3, testid: "dash-stat-traffic" },
  { label: "Leads Generated", value: "4.8K", icon: Users, testid: "dash-stat-leads" },
  { label: "Conversion Rate", value: "+178%", icon: TrendingUp, testid: "dash-stat-conversion" },
];

const brands = ["boAt", "blinkit", "TATA", "zomato", "OYO"];

const points = [
  { x: 8, y: 132 },
  { x: 84, y: 118 },
  { x: 160, y: 101 },
  { x: 236, y: 75 },
  { x: 314, y: 47 },
  { x: 390, y: 27 },
];

export default function DashboardCard() {
  return (
    <div
      data-testid="hero-dashboard-card"
      className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-emerald-900/50 bg-[#0B1512] p-6 text-white shadow-2xl sm:min-h-[560px] sm:p-7"
    >
      <div className="orb-mesh pointer-events-none absolute inset-0" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 pt-1 lg:pl-[140px]">
          <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
          <span className="whitespace-nowrap font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-300">
            Real Client Results
          </span>
        </div>
        <p className="font-script text-right text-xl leading-[1.05] text-[#34D399] sm:text-2xl">
          Real Brands.
          <br />
          Real Growth.
        </p>
      </div>

      <div className="relative z-10 mt-6 lg:pl-16">
        <span className="absolute right-0 top-1 rounded-full bg-[#16A34A] px-3 py-1.5 font-mono text-xs font-semibold text-white shadow-lg shadow-emerald-500/30">
          +287%
        </span>
        <p className="text-sm text-neutral-400">Total Revenue</p>
        <p
          data-testid="dashboard-revenue"
          className="mt-1 font-display text-5xl font-extrabold tracking-tight"
        >
          ₹ 12.4M
        </p>
        <p className="mt-2 flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 font-semibold text-[#22C55E]">
            <TrendingUp size={15} />
            +287%
          </span>
          <span className="text-neutral-500">in 6 months</span>
        </p>
      </div>

      <div className="relative z-10 mt-4 lg:pl-10">
        <svg
          viewBox="0 0 400 150"
          data-testid="dashboard-chart"
          className="h-32 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M8 132 C60 128 90 114 160 101 C210 92 220 82 236 75 C280 55 320 42 390 27 L390 150 L8 150 Z"
            fill="url(#revGrad)"
          />
          <path
            d="M8 132 C60 128 90 114 160 101 C210 92 220 82 236 75 C280 55 320 42 390 27"
            fill="none"
            stroke="#22C55E"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={i === points.length - 1 ? 5 : 3.5}
              fill={i === points.length - 1 ? "#22C55E" : "#0B1512"}
              stroke="#22C55E"
              strokeWidth="2"
            />
          ))}
        </svg>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-neutral-500">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div
            key={s.label}
            data-testid={s.testid}
            className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-3"
          >
            <p className="whitespace-nowrap text-[9px] leading-tight text-neutral-400">{s.label}</p>
            <div className="mt-2 flex items-center justify-between gap-1">
              <span className="text-sm font-bold">{s.value}</span>
              <s.icon size={15} className="shrink-0 text-[#22C55E]" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-auto pt-6">
        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-neutral-300">
          {brands.map((b) => (
            <span key={b} className="font-display text-sm font-bold sm:text-base">
              {b}
            </span>
          ))}
        </div>
        <p className="mt-3 text-center text-[11px] text-neutral-500">
          Trusted by fast-growing brands across India.
        </p>
      </div>
    </div>
  );
}
