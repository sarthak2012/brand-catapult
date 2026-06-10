// Small red circle with an up-right arrow, used on the Approach & Services sections.
export default function ArrowButton({ className = "" }) {
  return (
    <button
      aria-label="View more"
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-red-brand text-white shadow-lg transition-transform hover:scale-105 ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
