import { DetailPage } from "../../components";
import { Accordion } from "../WhyPage";

const sections = [
  {
    title: "HOW BURGLAR ALARMS WORK",
    content: {
      description:
        "Burglar alarms establish a protective zone around your property. When a sensor detects a potential intrusion, such as movement when the house is unoccupied or a door is forced open, it transmits a signal to the control panel. The panel then triggers the alarm, which can include:",
      items: [
        "A blaring siren to frighten away intruders.",
        "Flashing lights to grab attention from the neighborhood.",
        "Sending an alert to your smart phone, notifying you of a potential security breach.",
        "Contacting emergency services, depending on the system’s configuration",
      ],
    },
  },
  {
    title: "BENEFITS",
    content: {
      description:
        "There are numerous advantages to incorporating a burglar alarm system into your security strategy:",
      items: [
        "Deterrence: The mere presence of a visible alarm system discourages potential burglars from targeting your property.",
        "Early Warning: In the event of an intrusion attempt, the alarm system provides a timely alert, allowing you to take necessary actions.",
        "Connection to Monitoring Services: Some advanced systems connect to professional monitoring companies. These companies can dispatch emergency responders like police or firefighters upon receiving an alarm signal.",
        "Peace of Mind: Knowing your property is guarded by a reliable security system allows you to relax and feel more secure in your own home or business.",
      ],
    },
  },
  {
    title: "TYPES OF ALARMS",
    content: {
      description:
        "There are two primary categories monitored and unmonitored, and wired and wireless systems. Monitored systems connect to a security company for 24/7 vigilance, while unmonitored systems operate independently. Wired systems offer a stable connection, while wireless systems provide more flexibility in terms of placement.",
      items: [
        "Features: Consider the features that best suit your needs. Common features include motion sensors, door and window sensors, glass break detectors, and panic buttons.",
        "Budget: The cost of a burglar alarm system varies depending on its complexity and the features it offers.",
        "Intrusion Detection: Door and Window Sensors are strategically placed to trigger the alarm upon unauthorized entry",
        "Motion Sensors utilizing passive infrared technology to detect movement within designated areas.",
        "Glass Break Detectors recognize the distinct sound of shattering glass, offering an extra layer of security for vulnerable areas.",
      ],
    },
  },
  {
    title: "ALARMS DEVICES",
    content: {
      description: "",
      items: [
        "Panel",
        "magenetic Contact",
        "Vibration Sensor",
        "Fix Panic",
        "Keypad",
        "Power Supply",
        "Siren",
        "Smoke Detector",
        "PIR",
        "GSM Device",
      ],
    },
  },
  {
    title: "MONITORED VS UNMONITORED",
    content: {
      description:
        "Monitored Systems: These systems connect to a central monitoring station operated by a security company. Upon receiving an alarm signal, the monitoring station personnel will follow pre-determined protocols, which may include:",
      items: [
        "Contacting you to verify the alarm.",
        "Dispatching emergency responders (police or fire department) if necessary.",
        "Notifying key holders you designate in case of an emergency.",
        "Continuous professional development",
        "Providing ongoing support and troubleshooting for your security system.",
        "Unmonitored Systems: These systems operate independently and do not connect to a central monitoring station. When triggered, they typically rely on loud sirens and flashing lights to deter intruders. However, they lack the ability to dispatch emergency services or notify you remotely.",
      ],
    },
  },
  {
    title: "MOTION SENSORS",
    content: {
      description:
        "Laser Beam Detector: Laser Beam Detector:  Another simple design is a photo-sensor motion detector. These are the devices you might see in a store at a shopping mall. When somebody enters the store, the motion detector sounds a chime or bell. Photo-sensors have two components: - A source of focused light (often a laser beam) - A light sensor ",
      items: [
        "In a home security system, you aim the beam at the light sensor, across a passageway in your house.",
        "When somebody walks between the light source and the sensor, the path of the ",
        "beam is blocked briefly. The sensor registers a drop in light levels and sends a signal to the control box.",
      ],
    },
    content: {
      description:
        "Laser Beam Detector: Laser Beam Detector:  Another simple design is a photo-sensor motion detector. These are the devices you might see in a store at a shopping mall. When somebody enters the store, the motion detector sounds a chime or bell. Photo-sensors have two components: - A source of focused light (often a laser beam) - A light sensor ",
      items: [
        "In a home security system, you aim the beam at the light sensor, across a passageway in your house.",
        "When somebody walks between the light source and the sensor, the path of the beam is blocked briefly. ",
        "The sensor registers a drop in light levels and sends a signal to the control box.",
        "IR Beam Detector: More advanced security systems include passive infrared (PIR) motion detectors. ",
        "These sensors 'see' the infrared energy emitted by an intruder's body heat. ",
        "When an intruder walks into the field of view of the detector, the sensor detects a sharp increase in infrared energy. Of course, there will always be gradual fluctuation of heat energy in an area, so PIR detectors are designed to trigger the alarm only when infrared energy levels change very rapidly.",
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
        At Stead Fast Security, we offer Burgular Alarm services to ensure the
        safety and protection of our clients, their assets, and the community.
        Burglar alarm system consists of a control panel and devices such as
        indoor/outdoor burglar alarm sensor, magnetic contacts, panic buttons,
        glass break sensors, vibration sensors (Burglar Alarm accessories) etc.
        connected to the control panel.
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
