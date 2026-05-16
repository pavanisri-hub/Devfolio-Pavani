import { Container, SectionWrapper } from "@/components/layout";
import { MotionStagger, MotionStaggerItem, SectionHeading } from "@/components/ui";

const PLACEHOLDER_PROJECTS = [
  { title: "Project One", description: "Short project description." },
  { title: "Project Two", description: "Short project description." },
  { title: "Project Three", description: "Short project description." },
];

export function Projects() {
  return (
    <SectionWrapper id="projects" ariaLabel="Projects">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Placeholder — featured work and case studies will go here."
        />
        <MotionStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLACEHOLDER_PROJECTS.map((project) => (
            <MotionStaggerItem key={project.title}>
              <article className="surface-card flex h-full flex-col p-6">
                <h3 className="font-heading text-lg text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {project.description}
                </p>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Container>
    </SectionWrapper>
  );
}
