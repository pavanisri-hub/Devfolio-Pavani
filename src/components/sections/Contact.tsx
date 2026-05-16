import { Container, SectionWrapper } from "@/components/layout";
import { MotionFadeUp, SectionHeading } from "@/components/ui";

export function Contact() {
  return (
    <SectionWrapper id="contact" ariaLabel="Contact">
      <Container size="narrow">
        <SectionHeading
          title="Contact"
          subtitle="Placeholder — get in touch section will go here."
          align="center"
        />
        <MotionFadeUp delay={0.1}>
          <p className="text-center text-text-secondary">
            Email, social links, or a contact form will be added here.
          </p>
        </MotionFadeUp>
      </Container>
    </SectionWrapper>
  );
}
