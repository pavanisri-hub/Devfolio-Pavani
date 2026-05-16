import { Container, SectionWrapper } from "@/components/layout";
import { MotionFadeUp } from "@/components/ui";

export function Hero() {
  return (
    <SectionWrapper id="hero" spacing={false} ariaLabel="Introduction">
      <Container className="flex min-h-[100dvh] flex-col justify-center py-20">
        <MotionFadeUp>
          <p className="text-sm font-medium uppercase tracking-widest text-accent-purple">
            AI-driven Full Stack Developer
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Pavani
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            Building intelligent, elegant digital experiences.
          </p>
        </MotionFadeUp>
      </Container>
    </SectionWrapper>
  );
}
