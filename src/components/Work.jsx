const projects = [
  {
    name: "nest",
    img: "https://picsum.photos/seed/coffee/600/420",
    tags: ["BRANDING", "STRATEGY", "PR"],
  },
  {
    name: "HappiNest",
    img: "https://picsum.photos/seed/eggs/600/420",
    tags: ["BRANDING", "PACKAGING", "PR"],
    featured: true,
  },
  {
    name: "shishu",
    img: "https://picsum.photos/seed/baby/600/420",
    tags: ["BRANDING", "PACKAGING", "SOCIAL MEDIA"],
    extra: 3,
  },
];

export default function Work() {
  return (
    <section className="relative overflow-hidden bg-dark-bg pb-24 pt-16 text-white">
      <span className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 whitespace-nowrap text-3xl font-bold text-white/10 sm:text-5xl">
        WE STAND WITH YOU
      </span>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.name}>
              <div
                className={`overflow-hidden rounded-xl ${
                  p.featured ? "shadow-[0_0_45px_-5px_rgba(211,45,58,0.6)]" : ""
                }`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-56 w-full object-cover"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {p.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`tag ${
                      p.featured && i === p.tags.length - 1
                        ? "border-red-brand bg-red-brand text-white"
                        : "border-white/40 text-white"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
                {p.extra && (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                    +{p.extra}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* progress bar */}
        <div className="relative mx-auto mt-12 h-px w-72 max-w-full bg-white/20">
          <span className="absolute left-1/3 h-px w-1/3 bg-red-brand" />
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-red-brand px-8 py-3 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90">
            MORE OF WORK
          </button>
        </div>

        <span className="pointer-events-none mt-10 block text-3xl font-bold text-white/10 sm:text-5xl">
          WE TRANSFORM YOU
        </span>
      </div>
    </section>
  );
}
