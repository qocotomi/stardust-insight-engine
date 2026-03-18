import StardustCanvas from "@/components/StardustCanvas";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <StardustCanvas />

      {/* Subtle radial glow behind text */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, hsla(220, 80%, 55%, 0.06) 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <h1
          className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-[0.04em] text-foreground select-none"
        >
          ALKU AI
        </h1>
        <p className="mt-6 text-sm tracking-[0.35em] uppercase text-muted-foreground font-light">
          Make informed decisions — first
        </p>
      </div>
    </div>
  );
};

export default Index;
