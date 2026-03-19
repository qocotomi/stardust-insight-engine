import AnimatedGradient from "@/components/ui/animated-gradient";
import { SpecialText } from "@/components/ui/special-text";
import Starfield from "@/components/Starfield";
import StardustCanvas from "@/components/StardustCanvas";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        <AnimatedGradient
          config={{
            preset: "custom",
            color1: "#000000",
            color2: "#1a0a2e",
            color3: "#ff4500",
            rotation: -50,
            proportion: 5,
            scale: 0.01,
            speed: 12,
            distortion: 3,
            swirl: 55,
            swirlIterations: 18,
            softness: 75,
            offset: -299,
            shape: "Checks",
            shapeSize: 50,
          }}
          noise={{ opacity: 0.03, scale: 1 }}
          className="w-full h-full"
        />
      </div>

      {/* Stars overlay */}
      <Starfield />

      {/* Content */}
      {/* Cosmic genesis center piece */}
      <div className="relative z-[2] flex min-h-screen items-center justify-center">
        <StardustCanvas />
      </div>

      {/* Top-left branding */}
      <div className="fixed top-8 left-8 z-10">
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
