export default function Page({ children, className = "" }) {
  return (
    <div className={`bg-[#FBFFFF h-full flex flex-col w-screen ${className}`}>
      {children}
    </div>
  );
}
