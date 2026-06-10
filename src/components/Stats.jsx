import globe from "../assets/globe.png";

const stats = [
  { value: "30K+", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu" },
  { value: "2K+", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu" },
  { value: "100+", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu" },
];

export default function Stats() {
  return (
    <section className="bg-white px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* metrics */}
        <div className="space-y-12">
          {stats.map((s) => (
            <div key={s.value} className="flex items-start gap-6">
              <span className="w-28 shrink-0 text-5xl font-light text-red-brand sm:text-6xl">
                {s.value}
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* dotted globe */}
        <div className="flex items-center justify-center">
          <img
            src={globe}
            alt="Dotted globe highlighting India"
            className="h-auto w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
