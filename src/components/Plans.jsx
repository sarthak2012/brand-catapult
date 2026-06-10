import planImg from "../assets/plan.png";

export default function Plans() {
  return (
    <section className="bg-white px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <p className="max-w-md text-base leading-relaxed text-gray-600 sm:text-lg">
          We believe one size fits one, and only one! We work to become the
          right agency for our clients- researching, learning, experimenting and
          adapting tirelessly until we become the masters of their trade.
        </p>

        <img
          src={planImg}
          alt="Plan A and Plan B street signs"
          className="mx-auto h-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}
