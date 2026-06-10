import ArrowButton from "./ArrowButton.jsx";

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-dark-bg text-white">
      {/* background photo with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/accato/1600/900"
          alt="Featured client"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/60 to-dark-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
        {/* ghost text */}
        <span className="pointer-events-none absolute left-5 top-1/2 text-3xl font-bold tracking-wide text-white/10 sm:text-5xl lg:left-10">
          WE ADAPT FOR YOU
        </span>

        <div className="relative grid items-start gap-10 lg:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center gap-5">
            <span className="text-sm font-semibold text-red-brand">( 01 )</span>
            <span className="font-display text-5xl font-extrabold lg:text-6xl">
              accato
            </span>
          </div>

          <div className="lg:pl-10">
            <h3 className="text-2xl font-bold tracking-wide text-red-brand">
              OUR APPROACH
            </h3>
            <ArrowButton className="mt-6" />
          </div>

          <div className="max-w-sm">
            <div className="flex gap-3">
              <span className="tag border-white/40 text-white">BRANDING</span>
              <span className="tag border-red-brand bg-white/10 text-red-brand">
                STRATEGY
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        </div>

        {/* bottom curate bar */}
        <div className="relative mt-20 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold tracking-wide lg:justify-end">
          <span>WE CURATE</span>
          <span className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-red-brand">
            BRANDING <span className="text-xs">▾</span>
          </span>
          <span>FOR</span>
          <span className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-red-brand">
            D2C BRANDS <span className="text-xs">▾</span>
          </span>
        </div>

        <div className="relative mt-8 flex items-center gap-2 lg:absolute lg:bottom-8 lg:left-10 lg:mt-0">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-red-brand" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
        </div>
      </div>
    </section>
  );
}
