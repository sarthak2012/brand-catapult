import logo from "../assets/logo.png";

// Brand Catapult wordmark image. `light` is used on dark backgrounds (footer):
// since the logo art sits on a white background, we wrap it in a small white
// rounded card so its edges read cleanly against the dark section.
export default function Logo({ light = false }) {
  const img = (
    <img
      src={logo}
      alt="Brand Catapult"
      className="h-9 w-auto select-none sm:h-10"
    />
  );

  if (light) {
    return <span className="inline-block rounded-md bg-white p-1.5">{img}</span>;
  }
  return img;
}
