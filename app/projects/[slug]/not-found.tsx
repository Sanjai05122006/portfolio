import { NotFoundContent } from "@/components/feedback/not-found-content";

export default function ProjectNotFound() {
  return (
    <section className="relative flex min-h-full items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[14%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(194,183,255,0.16)_0%,rgba(194,183,255,0)_72%)] blur-3xl" />
        <div className="absolute right-[8%] top-[10%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(177,202,255,0.16)_0%,rgba(177,202,255,0)_72%)] blur-3xl" />
      </div>
      <NotFoundContent />
    </section>
  );
}
