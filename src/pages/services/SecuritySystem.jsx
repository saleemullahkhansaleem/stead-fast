import { DetailPage } from "../../components";
import { Accordion } from "../WhyPage";

const sections = [
  {
    title: "Video Management System (VMS)",
    content: {
      description: "",
      items: [
        "Body Worn Video Camera (BWVC)",
        "CCTV Monitoring",
        "CCTV PTZ Control",
        "Drone / Unmanned Aerial Vehicle(UAV)",
        "Face Recognition",
        "Mobile Digital Video Recording (MDVR) For Transport",
      ],
    },
  },
  {
    title: "Access Control System",
    content: {
      description: "",
      items: [
        "Automatic Number Plate Recognition (ANPR)",
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
    title: "Security Alarms System (Counter Intrusion)",
    content: {
      description: "",
      items: [

        "Flameable Gas Detector",
        "Gate Intrusion Detection/Prevention",
        "Glass Breakage Detector",
        "Intrusion Detection",
        "Motion Detectors",
        "Passive IR (PIR) Detectors",
        "Perimeter Intrusion Detection/Prevention",
        "Security Bollard Intrusion Detection/Prevention",
        "Siesmic Vibration,Tilt and Gas Detector",
        "Shock Sensors",
        "Ultrasonic Sensors",
        "Wireless Security Alarm Systems",
      ],
    },
  },
  {
    title: "Safety Alarm System",
    content: {
      description: "",
      items: [
        "Emergency Alarm System",
        "Fire Detction (Linear Smoke Detectors/Point Type Detectors Fumes etc.)",
        "Heat Sensors",
        "Humidity Sensors",
        "Infrared Detectors Pyroelectric and Bolometer Types",
        "Passenger Traffic Detector",
        "Public Address System",
        "Smoke Detector",
        "Sound and Light Alarm annunciators",
        "Sprinklers System",
      ],
    },
  },
  {
    title: "Vehicle Tracking System (VTS)",
    content: {
      description: "",
      items: [
        "Automatic Identification System (AIS)",
        "Automatic Dependent Surveillance Broadcast (ADS-B)",
        "GIS Database and Addresses",
        "GPS Tracker",
        "Drone / Unmanned Aerial Vehicle (UAV)",
        "Map Layer",
        "Route Deviation Alarm",
        "Vehicle Safety, GPS and Telemetric",
      ],
    },
  },
  {
    title: "Physical Key Management System",
    content: {
      description: "",
      items: [
        "Emergency Exits",
        "Escape Door Terminal",
        "Key Holding",
        "Keys and Locks",
      ],
    },
  },
  {
    title: "Building Management System (BMS)",
    content: {
      description: "",
      items: [
        "Building Automation",
        "Capacity Control By People Counting",
        "Digital Signage and Advertising Management",
        "Generators",
        "Heating Ventilation and Air Conditioning (HVAC)",
        "Illumination & Lighting",
        "Lifts / Escalators",
        "Light Management",
        "Parking Management (Multiple Sites)",
        "Power Consumption",
        "Smart Meters",
      ],
    },
  },
];

export default function SecuritySystem() {
  return (
    <DetailPage
      title="Security Systems"
      description="Our integrated security solutions offer comprehensive protection with advanced video monitoring (CCTV, mobile, BWV, drones), burglar alarm systems, and access control (biometrics, cards, remote gates). These systems include real-time alerts, remote monitoring, and customizable settings to safeguard your property and ensure peace of mind. Trust us to deliver cutting-edge technology, vehicle tracking, and professional guarding services with 24/7 support."
      imageUrl="/images/security_system/3.webp"
      sideImages={["/images/security_system/2.webp", "/images/security_system/1.webp"]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Security Systems</h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
      We provide advanced Video Monitoring (CCTV, mobile, BWV, drones), Access Control (biometrics, cards, remote gates), and comprehensive Alarm Systems (security and safety). Our Vehicle Tracking System (VTS) ensures GPS/GIS-based tracking for vehicles, cargo, and vessels.

Additionally, we offer Key Management Systems, IoT-enabled Building Automation, and professional Guarding Services to meet diverse security needs.
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

