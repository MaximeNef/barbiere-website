export default function Page({ children, className = "" }) {
  return (
    <div
      className={`bg-[#41B8B8]/10 h-full flex flex-col w-screen ${className}`}
    >
      {children}
    </div>
  );
}
