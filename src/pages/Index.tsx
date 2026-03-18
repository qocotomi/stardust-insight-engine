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
            color1: "#050505",
            color2: "#3B82F6",
            color3: "#050505",
            rotation: -50,
            proportion: 8,
            scale: 0.01,
            speed: 15,
            distortion: 0,
            swirl: 50,
            swirlIterations: 16,
            softness: 60,
            offset: -299,
            shape: "Checks",
            shapeSize: 45,
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
          <SpecialText speed={30} delay={0.5}>
            Make informed decisions — first
          </SpecialText>
        </p>
      </div>
    </div>
  );
};

export default Index;
