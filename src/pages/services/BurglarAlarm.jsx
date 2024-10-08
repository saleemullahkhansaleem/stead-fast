import { DetailPage } from "../../components";
import { Accordion } from "../WhyPage";

const sections = [
  {
    title: "Components of Burglar Alarm Systems",
    content: {
      description: "",
      items: [
        "Sensors (motion, door/window, glass break)",
        "Control panel",
        "Keypad or key fob",
        "Siren and strobe light",
        "Monitoring and notification systems",
      ],
    },
  },
  {
    title: "Types of Burglar Alarm Systems",
    content: {
      description: "",
      items: [
        "Wired systems",
        "Wireless systems",
        "Hybrid systems",
        "Smart alarm systems (integrated with IoT devices)",
      ],
    },
  },
  {
    title: "Additional System Security Measures",
    content: {
      description: "",
      items: [
        "Access Control Systems (ACS)",
        "Closed-Circuit Television (CCTV)",
        "Video Surveillance Systems",
        "Fire Alarm Systems",
        "Intrusion Detection Systems (IDS)",
        "Secure Communication Systems",
        "Biometric Authentication Systems",
      ],
    },
  },
  {
    title: "Benefits of System Security",
    content: {
      description: "",
      items: [
        "Enhanced security and safety",
        "Reduced risk of theft and damage",
        "Increased peace of mind",
        "Compliance with regulations",
        "Potential insurance discounts",
      ],
    },
  },
];

export default function BurglarAlarm() {
  return (
    <DetailPage
      title="Burglar Alarm"
      description="Our advanced burglar alarm systems are designed to provide robust security for your home or business. With features like real-time alerts, remote monitoring, and customizable settings, these systems deter intruders and ensure your peace of mind. Trust us to safeguard your property with cutting-edge technology and 24/7 support."
      imageUrl="/images/alarm/control1.webp"
      sideImages={["/images/alarm/alarm1.jpg", "/images/alarm/alarm2.jpg"]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Burglar Alarm</h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        A burglar alarm system is a crucial component of system security,
        designed to: <br />
        1.Detect intruders <br />
        2.Deter potential threats <br />
        3.Alert authorities and stakeholders <br />
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
