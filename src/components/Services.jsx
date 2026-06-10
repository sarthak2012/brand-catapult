import { useState } from "react";
import ArrowButton from "./ArrowButton.jsx";

const services = [
  { name: "STRATEGY & CONSULTING", points: ["Market Research", "Brand Strategy", "Go-to-market"] },
  { name: "PUBLIC RELATIONS", points: ["Media Relations", "Press Releases", "Crisis Comms"] },
  { name: "DIGITAL", points: ["Web & App", "Performance Marketing", "SEO"] },
  {
    name: "BRANDING & DESIGN",
    points: [
      "Brand Identity Development",
      "Re-Branding",
      "Brand Communications",
      "Brand Collaterals",
      "Packaging Design",
      "Marketing Collaterals",
    ],
    images: [
      "https://picsum.photos/seed/book/300/360",
      "https://picsum.photos/seed/drink/300/360",
    ],
  },
  { name: "BTL & ADVERTISING", points: ["Activations", "OOH", "Campaigns"] },
  { name: "PHOTOGRAPHY", points: ["Product", "Lifestyle", "Editorial"] },
  { name: "TECHNOLOGY", points: ["Web Development", "E-commerce", "Automation"] },
  { name: "CGI / VFX", points: ["3D Renders", "Motion", "Product CGI"] },
];

export default function Services() {
  const [active, setActive] = useState(3); // Branding & Design open by default

  return (
    <section className="bg-dark-bg px-5 py-20 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold tracking-[0.3em] text-white">
          OUR SERVICES
        </p>
        <p className="mt-1 text-sm font-semibold tracking-[0.3em] text-red-brand">
          PEOPLE
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* service list */}
          <ul className="space-y-3">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.name}>
                  <button
                    onClick={() => setActive(i)}
                    className="group flex w-full items-center gap-3 text-left"
                  >
                    {isActive && (
                      <span className="text-xs font-semibold text-white">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    )}
                    <span
                      className={`text-3xl font-bold tracking-tight transition-colors sm:text-4xl lg:text-5xl ${
                        isActive
                          ? "text-red-brand"
                          : "text-white/25 group-hover:text-white/50"
                      }`}
                    >
                      {s.name}
                    </span>
                    {isActive && <ArrowButton className="ml-2 h-9 w-9" />}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* detail panel for the active service */}
          <div className="lg:pt-10">
            <p className="mb-6 text-base font-bold tracking-wide sm:text-lg">
              <span className="text-red-brand">REAL BRANDS.</span>{" "}
              <span className="text-white/40">REAL SHIFTS.</span>{" "}
              <span className="text-red-brand">REAL RESULTS.</span>
            </p>

            {services[active].images && (
              <div className="mb-6 flex gap-3">
                {services[active].images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-40 w-1/2 rounded-md object-cover"
                  />
                ))}
              </div>
            )}

            <ul className="space-y-2 text-gray-200">
              {services[active].points.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-gray-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
