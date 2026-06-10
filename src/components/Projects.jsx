import projectImg from "../assets/project.png";

export default function Projects() {
  return (
    <section className="relative overflow-hidden bg-gray-50 px-5 pt-16 lg:px-10">
      <p className="text-center text-2xl font-bold tracking-wide text-red-brand sm:text-3xl">
        GLOBALLY SINCE 2015
      </p>

      <div className="mx-auto grid max-w-7xl items-center gap-10 pb-28 pt-10 lg:grid-cols-2">
        <div>
          <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            We help brands transform faster than their consumers do. Every
            strategy, campaign or goal we set out is tied to concrete and
            measurable metrics. It's this reflection and evaluation that helps us
            create dynamic strategies and rock-solid processes.
          </p>
          <h3 className="mt-8 text-2xl font-bold tracking-wide text-red-brand">
            PROJECTS
          </h3>
        </div>

        {/* abstract orb */}
        <img
          src={projectImg}
          alt="Abstract red orb"
          className="mx-auto h-auto w-full max-w-md"
        />
      </div>

      {/* diagonal black cut into the next dark section */}
      <div
        className="absolute -bottom-px left-0 h-24 w-full bg-dark-bg"
        style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }}
      />
    </section>
  );
}
