import { DetailPage } from "../../components";
import { Accordion } from "../WhyPage";

const sections = [
  {
    title: "Roles of Canine Security",
    content: {
      description: "",
      items: [
        "Detection of unauthorized individuals",
        "Enhanced perimeter security",
        "Threat deterrence through presence",
        "Search and rescue operations",
        "Detection of explosives and narcotics",
      ],
    },
  },
  {
    title: "Types of Security Dogs",
    content: {
      description: "",
      items: [
        "Guard dogs for physical security",
        "Detection dogs for contraband and explosives",
        "Patrol dogs for law enforcement",
        "Search and rescue dogs",
        "Personal protection dogs",
      ],
    },
  },
  {
    title: "Benefits of Canine Security",
    content: {
      description: "",
      items: [
        "Highly effective threat deterrent",
        "Quick response to security breaches",
        "Enhanced detection capabilities",
        "Cost-effective security solution",
        "Reliable, trained, and disciplined security approach",
      ],
    },
  },
  {
    title: "Training and Handling",
    content: {
      description: "",
      items: [
        "Professional obedience training",
        "Scent detection training",
        "Handler-assisted operations",
        "Regular drills and assessments",
        "Integration with other security measures",
      ],
    },
  },
];

export default function Canine() {
  return (
    <DetailPage
      title="Canine Security"
      description="Our highly trained canine security teams provide an advanced level of security, ensuring rapid detection, threat deterrence, and protection for your premises. With expertise in patrolling, detection, and response, our security dogs enhance safety and peace of mind."
      imageUrl="/images/canine/canine1.webp"
      sideImages={["/images/canine/canine2.webp", "/images/canine/canine3.webp"]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Canine Security</h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        Canine security services offer an elite level of protection, utilizing
        highly trained security dogs to:
        <br />
        1. Detect and neutralize threats
        <br />
        2. Enhance surveillance and patrol operations
        <br />
        3. Provide a strong deterrent against intrusions and criminal activity
        <br />
      </p>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <Accordion
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </DetailPage>
  );
}
