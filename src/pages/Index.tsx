import AnimatedGradient from "@/components/ui/animated-gradient";
import { SpecialText } from "@/components/ui/special-text";

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

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-[0.85] tracking-[0.04em] text-foreground select-none">
          ALKU AI
        </h1>
        <p className="mt-6 text-sm tracking-[0.35em] uppercase text-muted-foreground">
          <SpecialText speed={30} delay={0.8} inView once>
            Make informed decisions — first
          </SpecialText>
        </p>
      </div>
    </div>
  );
};

export default Index;
