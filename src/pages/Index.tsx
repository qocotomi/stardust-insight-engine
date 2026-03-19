import { SpecialText } from "@/components/ui/special-text";
import Starfield from "@/components/Starfield";
import BlackHole from "@/components/BlackHole";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Stars */}
      <Starfield />

      {/* Black hole centerpiece */}
      <BlackHole />

      {/* Top-left branding */}
      <div className="fixed top-16 left-16 z-10">
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-[0.04em] text-foreground select-none">
          ALKU AI
        </h1>
        <p className="mt-3 text-xs tracking-[0.35em] uppercase text-muted-foreground">
          <SpecialText speed={30} delay={0.8} inView once>
            Make informed decisions — first
          </SpecialText>
        </p>
      </div>

      {/* Bottom center */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-10">
        <p className="text-sm tracking-[0.4em] uppercase text-muted-foreground">
          <SpecialText speed={25} delay={2.5} inView once>
            Coming — Fall 2026
          </SpecialText>
        </p>
      </div>
    </div>
  );
};

export default Index;
