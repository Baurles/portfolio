export default function Marquee({
  children,
  y,
  deg,
  direction,
}: {
  children: React.ReactNode;
  y: string;
  deg: string;
  direction: string;
}) {
  return (
    <div
      style={{ marginBottom: y, rotate: deg }}
      className="w-screen font-bold opacity-50 shadow-white shadow-sm h-16 content-center -z-10 bg-white absolute"
    >
      <marquee direction={direction} className="text-black">
        {children}
      </marquee>
    </div>
  );
}
