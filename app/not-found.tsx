import { NotFoundContent } from "@/components/feedback/not-found-content";

export default function NotFound() {
  return (
    <section className="relative flex min-h-full items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[12%] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,rgba(196,180,255,0.16)_0%,rgba(196,180,255,0)_72%)] blur-3xl sm:left-[10%] sm:top-[18%] sm:h-[220px] sm:w-[220px]" />
        <div className="absolute right-[4%] top-[8%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(177,202,255,0.16)_0%,rgba(177,202,255,0)_72%)] blur-3xl sm:right-[8%] sm:top-[12%] sm:h-[260px] sm:w-[260px]" />
        <div className="absolute bottom-[6%] left-[28%] h-[120px] w-[120px] rounded-full bg-[radial-gradient(circle,rgba(222,194,255,0.14)_0%,rgba(222,194,255,0)_72%)] blur-3xl sm:bottom-[10%] sm:left-[34%] sm:h-[180px] sm:w-[180px]" />
      </div>
      <NotFoundContent />
    </section>
  );
}
