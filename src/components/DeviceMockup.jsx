// Lightweight CSS-based device silhouettes standing in for real product screenshots.
export default function DeviceMockup({ type, dark = false }) {
  const frame = dark ? "bg-[#2a2a2a] border-[#3a3a3a]" : "bg-white/90 border-black/5";
  const screen = dark ? "bg-[#111111]" : "bg-[#f4f3f1]";

  if (type === "monitor") {
    return (
      <div className="flex w-full max-w-[280px] flex-col items-center">
        <div className={`w-full rounded-xl border p-3 shadow-sm ${frame}`}>
          <div className={`aspect-[16/10] w-full rounded-md ${screen}`} />
        </div>
        <div className={`mt-1 h-3 w-10 ${dark ? "bg-[#2a2a2a]" : "bg-white/90"}`} />
        <div className={`h-1.5 w-20 rounded-full ${dark ? "bg-[#2a2a2a]" : "bg-white/90"}`} />
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div
        className={`aspect-[3/4] w-full max-w-[220px] rounded-2xl border p-2.5 shadow-sm ${frame}`}
      >
        <div className={`h-full w-full rounded-lg ${screen}`} />
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div
        className={`aspect-[9/19] w-full max-w-[150px] rounded-[1.8rem] border p-2 shadow-sm ${frame}`}
      >
        <div className={`h-full w-full rounded-[1.2rem] ${screen}`} />
      </div>
    );
  }

  // desktop
  return (
    <div className="flex w-full max-w-[260px] flex-col items-center gap-2">
      <div className={`aspect-square w-24 rounded-xl border p-2 shadow-sm ${frame}`}>
        <div className={`h-full w-full rounded-md ${screen}`} />
      </div>
      <div className={`w-full rounded-xl border p-3 shadow-sm ${frame}`}>
        <div className={`aspect-[16/10] w-full rounded-md ${screen}`} />
      </div>
    </div>
  );
}
