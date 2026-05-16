import { Container, SectionWrapper } from "@/components/layout";
import { MotionStagger, MotionStaggerItem, SectionHeading } from "@/components/ui";

const PLACEHOLDER_SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "AI / ML",
  "Python",
  "Cloud",
];

export function Skills() {
  return (
    <SectionWrapper id="skills" ariaLabel="Skills">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Placeholder — technologies and expertise will go here."
        />
        <MotionStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_SKILLS.map((skill) => (
            <MotionStaggerItem key={skill}>
              <div className="surface-card px-5 py-4 text-text-primary">
                {skill}
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Container>
    </SectionWrapper>
  );
}
