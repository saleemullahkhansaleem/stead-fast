import { DetailPage } from "../../components";
import { Accordion } from "../WhyPage";

const sections = [
  {
    title: "Video Management System (VMS)",
    content: {
      description: "",
      items: [
        "ANPR",
        "Body Worn Video (BWV)",
        "CCTV Monitoring",
        "CCTV PTZ Control",
        "Drone / UAV",
        "Face Recognition",
        "Mobile (DVR)",
        "Radar",
        "Transport and MDVR Surveillance",
      ],
    },
  },
  {
    title: "Access Control System",
    content: {
      description: "",
      items: [
        "Biometrics",
        "Doors and Locks",
        "Door Security Management",
        "Efficient Vehicle Entrance",
        "Face Recognition",
        "Gates and Barriers",
        "Photo ID",
        "RFID & Readers",
        "Under Vehicle Surveillance System (UVSS)",
        "Visitor Management System",
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

export default function SecuritySystem() {
  return (
    <DetailPage
      title="Security System"
      description="Our advanced burglar alarm systems are designed to provide robust security for your home or business. With features like real-time alerts, remote monitoring, and customizable settings, these systems deter intruders and ensure your peace of mind. Trust us to safeguard your property with cutting-edge technology and 24/7 support."
      imageUrl="/images/alarm/control1.webp"
      sideImages={["/images/alarm/alarm1.jpg", "/images/alarm/alarm2.jpg"]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Security System</h2>
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

