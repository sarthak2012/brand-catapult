// Decorative band: a red disc in the centre with warm gold light pooling
// on each side. Built entirely with CSS gradients.
export default function Divider() {
  return (
    <section className="relative h-[40vh] min-h-[280px] overflow-hidden bg-black">
      {/* gold light left */}
      <div
        className="absolute -left-24 top-1/2 h-[120%] w-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 80% 50%, rgba(220,190,120,0.85) 0%, rgba(120,95,40,0.2) 40%, transparent 65%)",
        }}
      />
      {/* gold light right */}
      <div
        className="absolute -right-24 top-1/2 h-[120%] w-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(220,190,120,0.85) 0%, rgba(120,95,40,0.2) 40%, transparent 65%)",
        }}
      />
      {/* red disc */}
      <div
        className="absolute left-1/2 top-1/2 h-[55vh] max-h-[360px] w-[55vh] max-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 45% 40%, #d8404a 0%, #c2202c 70%, #a51b26 100%)",
        }}
      />
    </section>
  );
}
