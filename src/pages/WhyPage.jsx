import { MdSecurity } from "react-icons/md";
import { DetailPage } from "../components";
import { useState } from "react";

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

export default function WhyPage() {
  return (
    <DetailPage
      title="WHY CHOOSE US"
      description="Your Trusted Security Partner."
      imageUrl="/images/security/placeholder.jpg"
      sideImages={[
        "/images/security/placeholder.jpg",
        "/images/security/placeholder.jpg",
      ]}
      icon={<MdSecurity className="text-secondary text-5xl" />}
      reverse
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

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleAccordion}
      className="group cursor-cell bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-between items-center">
        <h4 className="text-primary text-xl font-bold">{title}</h4>
        <span
          className={`transform transition-transform duration-300 text-2xl font-bold group-hover:text-primary ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4">
          <p className="text-foregroundMuted">{content.description}</p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            {content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
