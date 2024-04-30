export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container snap-start flex items-center justify-center pt-20 h-[calc(100vh-5rem)]">
      {children}
    </div>
  );
}
