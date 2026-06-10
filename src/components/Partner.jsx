// Playful confetti-style accents (dots + short rules) around a big heading.
export default function Partner() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-28 text-center">
      {/* scattered accents */}
      <span className="absolute left-[12%] top-[35%] h-6 w-6 rounded-full bg-purple-400" />
      <span className="absolute left-[22%] top-[24%] h-3 w-3 rounded-full bg-yellow-400" />
      <span className="absolute right-[14%] top-[18%] h-4 w-4 rounded-full bg-red-brand" />
      <span className="absolute right-[8%] top-[45%] h-2.5 w-2.5 rounded-full bg-green-400" />
      <span className="absolute bottom-[22%] left-[22%] h-4 w-4 rounded-full bg-sky-300" />
      <span className="absolute bottom-[24%] right-[18%] h-2.5 w-2.5 rounded-full bg-indigo-300" />
      <span className="absolute right-[20%] top-[48%] hidden h-0.5 w-32 bg-yellow-400 sm:block" />
      <span className="absolute bottom-[40%] left-[24%] hidden h-0.5 w-32 bg-blue-300 sm:block" />

      <h2 className="relative text-4xl font-light leading-tight tracking-tight text-gray-500 sm:text-6xl lg:text-7xl">
        WE PARTNER
        <br />
        WITH PEOPLE
        <br />
        IN MOTION
      </h2>

      <p className="relative mx-auto mt-10 max-w-md text-base leading-relaxed text-gray-400">
        Founders with conviction, teams feeling the stretch, ideas too big to
        stay small.
      </p>
    </section>
  );
}
