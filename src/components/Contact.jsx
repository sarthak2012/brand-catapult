import { useState } from "react";

const initial = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend for this assignment — just log and show a confirmation.
    console.log("Contact form submitted:", form);
    setSent(true);
    setForm(initial);
  };

  const inputClass =
    "w-full border-b border-white/50 bg-transparent pb-2 pt-6 text-white placeholder-white/70 outline-none focus:border-white";

  return (
    <section id="contact" className="bg-red-brand px-5 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-light leading-tight tracking-tight text-white sm:text-6xl">
            WE DON'T
            <br />
            CHASE.
            <br />
            WE CALIBRATE.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
            If you're thinking big, thinking bold, or thinking finally —you're
            thinking like us.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label className="block text-xs font-semibold tracking-widest text-white/80">
            NAME
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </label>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className="block text-xs font-semibold tracking-widest text-white/80">
              EMAIL
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </label>
            <label className="block text-xs font-semibold tracking-widest text-white/80">
              PHONE
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </label>
          </div>

          <label className="mt-6 block text-xs font-semibold tracking-widest text-white/80">
            MESSAGE
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              className={inputClass}
            />
          </label>

          <div className="mt-10 flex items-center gap-4">
            <button
              type="submit"
              className="rounded-full bg-dark-bg px-10 py-4 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90"
            >
              START A CONVERSATION
            </button>
            {sent && (
              <span className="text-sm text-white">Thanks — we'll be in touch!</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
