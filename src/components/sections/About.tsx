import { Container, SectionWrapper } from "@/components/layout";
import { MotionFadeUp, SectionHeading } from "@/components/ui";

export function About() {
  return (
    <SectionWrapper id="about" ariaLabel="About">
      <Container>
        <SectionHeading
          title="About"
          subtitle="Placeholder — your story and background will go here."
        />
        <MotionFadeUp delay={0.1}>
          <p className="max-w-2xl text-text-secondary">
            Brief introduction about who you are, what you build, and what drives
            you as a developer.
          </p>
        </MotionFadeUp>
      </Container>
    </SectionWrapper>
  );
}
