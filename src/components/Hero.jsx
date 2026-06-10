// Hero. The 3D-looking spheres are recreated with CSS radial-gradients
// (no image assets needed for these).
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center px-5 pb-24 pt-14 text-center lg:min-h-[88vh]">
        <p className="z-10 text-sm font-semibold tracking-[0.3em] text-gray-500 sm:text-base">
          MARKET STRATEGIES
        </p>
        <h1 className="z-10 mt-4 text-5xl font-light leading-tight tracking-tight text-gray-500 sm:text-6xl lg:text-8xl">
          THAT MOVE
          <br />
          WITH YOU
        </h1>

        {/* big base sphere */}
        <div
          className="pointer-events-none absolute -bottom-32 left-1/2 h-[70vw] w-[70vw] max-h-[640px] max-w-[640px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 38% 30%, #fdfdfd 0%, #e9e9ea 45%, #c7c7c9 100%)",
          }}
        />

        {/* blue sphere */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-20 -translate-x-[10%] -translate-y-[40%] rounded-full sm:h-28 sm:w-28"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #aebdf0 0%, #6f86c9 55%, #3f55a0 100%)",
          }}
        />

        {/* yellow sphere */}
        <div
          className="pointer-events-none absolute bottom-10 right-[8%] h-24 w-24 rounded-full sm:h-36 sm:w-36 lg:bottom-16"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #f6e7b8 0%, #e8cf86 60%, #cdae5e 100%)",
          }}
        />

        {/* small red dot sphere */}
        <div
          className="pointer-events-none absolute bottom-32 left-[20%] h-8 w-8 rounded-full lg:bottom-44"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #ef5a63 0%, #d32d3a 70%)",
          }}
        />

        {/* carousel dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-red-brand" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
}
