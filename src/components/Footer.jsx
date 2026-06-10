import Logo from "./Logo.jsx";
import socialOrbit from "../assets/image.png";

const caseStudies = [
  "Strategy & Consulting",
  "Branding & Design",
  "Digital",
  "Public Relations",
  "BTL & Advertising",
  "Photography",
  "Technology",
  "CGI/VFX",
];

const quickLinks = ["Home", "Services", "Work", "About Us", "Culture"];

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      {/* social presence */}
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-10">
        {/* orbit */}
        <img
          src={socialOrbit}
          alt="Brand Catapult team moments in orbit"
          className="mx-auto h-auto w-full max-w-md"
        />

        {/* heading + follow */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold tracking-[0.3em] text-red-brand">
            SOCIAL PRESENCE
          </p>
          <h2 className="mt-4 text-5xl font-light tracking-tight text-gray-200 sm:text-6xl">
            SPAM
            <br />
            THE GRAM
          </h2>
          <button className="mt-8 rounded-full bg-red-brand px-8 py-3 text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-90">
            FOLLOW @BRANDCATAPULT
          </button>
        </div>
      </div>

      {/* link columns */}
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <Logo light />
            <div className="mt-6 flex items-center gap-3 text-gray-400">
              <SocialIcon label="Behance" />
              <SocialIcon label="LinkedIn" />
              <SocialIcon label="Instagram" />
              <span className="text-sm">Follow Us</span>
            </div>
          </div>

          <div />

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white">
              CASE STUDIES
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {caseStudies.map((c) => (
                <li key={c}>
                  <a href="#" className="hover:text-white">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-white">
              QUICK LINKS
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((q) => (
                <li key={q}>
                  <a href="#" className="hover:text-white">
                    {q}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

const icons = {
  Behance: (
    <path d="M8.197 11.7c.962-.49 1.46-1.16 1.46-2.24 0-2.14-1.6-2.66-3.44-2.66H1v10.4h5.36c1.95 0 3.78-.94 3.78-3.12 0-1.35-.64-2.35-1.943-2.38zM3.29 8.54h2.28c.88 0 1.67.245 1.67 1.27 0 .945-.62 1.32-1.49 1.32H3.29V8.54zm2.54 6.86H3.29v-2.62h2.59c1.07 0 1.75.45 1.75 1.36 0 .9-.79 1.26-1.8 1.26zm9.32-7.07h4.07v.99h-4.07v-.99zm5.85 4.66c0-2.23-1.3-4.08-3.66-4.08-2.29 0-3.85 1.72-3.85 3.98 0 2.34 1.48 3.96 3.85 3.96 1.79 0 2.95-.8 3.51-2.52h-1.81c-.2.64-1 .98-1.62.98-1.2 0-1.83-.7-1.83-1.9h5.4c.01-.13.01-.27.01-.42zm-5.4-.83c.07-.98.72-1.6 1.69-1.6 1.02 0 1.52.6 1.61 1.6h-3.3z" />
  ),
  LinkedIn: (
    <path d="M4.98 3.5a2 2 0 11-.02 4 2 2 0 01.02-4zM3.4 8.98h3.15V19H3.4V8.98zM9.1 8.98h3.02v1.37h.04c.42-.8 1.45-1.64 2.98-1.64 3.19 0 3.78 2.1 3.78 4.83V19h-3.15v-4.83c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55V19H9.1V8.98z" />
  ),
  Instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 00-.88-1.35 3.6 3.6 0 00-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 110 10.6 5.3 5.3 0 010-10.6zm0 1.62a3.68 3.68 0 100 7.36 3.68 3.68 0 000-7.36zm5.4-.96a1.24 1.24 0 11-2.48 0 1.24 1.24 0 012.48 0z" />
  ),
};

function SocialIcon({ label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-opacity hover:opacity-80"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        {icons[label]}
      </svg>
    </a>
  );
}
