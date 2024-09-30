import { DetailPage } from "../../components";
import { Accordion } from "../WhyPage";

const sections = [
  {
    title: "We Offer",
    content: {
      description: "",
      items: [
        "Experienced and trained personnel",
        "State-of-the-art equipment and technology",
        "Customized security solutions",
        "24/7 emergency response",
        "Competitive pricing",
        "Unwavering commitment to excellence",
      ],
    },
  },
  {
    title: "OBJECTIVE",
    content: {
      description:
        "Securing Your World. Our primary objective is to provide effective security solutions that safeguard our clients' interests, minimize risks, and ensure a secure environment for business and daily life. We aim to:",
      items: [
        "Protect people, property, and assets",
        "Prevent security breaches and incidents",
        "Respond promptly to emergencies",
        "Provide peace of mind through exceptional service",
      ],
    },
  },
  {
    title: "HOW WE OPERATE",
    content: {
      description:
        "Operational Excellence. We ensure operational excellence through:",
      items: [
        "Rigorous recruitment and selection process",
        "Comprehensive training and development programs",
        "Proven operational protocols and procedures",
        "Regular quality control and assurance measures",
        "Open communication and feedback mechanisms",
      ],
    },
  },
  {
    title: "TRAINING",
    content: {
      description: "Empowering Our Teams. Our training programs include:",
      items: [
        "Basic training (first aid, firefighting, etc.)",
        "Advanced training (tactical response, crisis management, etc.)",
        "Specialized training (high-risk security, event management, etc.)",
        "Continuous professional development",
        "Scenario-based training",
      ],
    },
  },
  {
    title: "SPECIALIZED TRAINING",
    content: {
      description:
        "Expertise in High-Risk Security. Our specialized training programs cover:",
      items: [
        "High-risk security operations",
        "Executive protection",
        "Event security management",
        "Counter-terrorism and surveillance",
        "Tactical response and crisis management",
      ],
    },
  },
];

export default function BurglarAlarm() {
  return (
    <DetailPage
      title="Burglar Alarm"
      description="Our advanced burglar alarm systems are designed to provide robust security for your home or business. With features like real-time alerts, remote monitoring, and customizable settings, these systems deter intruders and ensure your peace of mind. Trust us to safeguard your property with cutting-edge technology and 24/7 support."
      imageUrl="/images/security/placeholder.jpg"
      sideImages={[
        "/images/security/placeholder.jpg",
        "/images/security/placeholder.jpg",
      ]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Stead Fast Security
      </h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        At Stead Fast Security, we offer exceptional security services to ensure
        the safety and protection of our clients, their assets, and the
        community.
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
