import { Container, SectionWrapper } from "@/components/layout";
import { MotionFadeUp, SectionHeading } from "@/components/ui";

export function Achievements() {
  return (
    <SectionWrapper id="achievements" ariaLabel="Achievements">
      <Container>
        <SectionHeading
          title="Achievements"
          subtitle="Placeholder — awards, certifications, and milestones will go here."
        />
        <MotionFadeUp delay={0.1}>
          <ul className="space-y-4 text-text-secondary">
            <li className="surface-card px-5 py-4">Achievement placeholder 1</li>
            <li className="surface-card px-5 py-4">Achievement placeholder 2</li>
            <li className="surface-card px-5 py-4">Achievement placeholder 3</li>
          </ul>
        </MotionFadeUp>
      </Container>
    </SectionWrapper>
  );
}
