import { MdSecurity } from "react-icons/md";
import { Container, CoverSection, DetailPage, Services } from "../components";
import { useState } from "react";

const services = [
  {
    title: "Physical Security",
    description: "Secure Environments. We provide:",
    details: [
      {
        text: "Access control systems",
        img: "/images/placeholder.jpg",
        description:
          "Access control systems enhance physical security by regulating who can enter or exit a facility using methods such as key cards, biometric scans, or PIN codes. They ensure only authorized personnel gain access, reducing risks of unauthorized entry.",
      },
      {
        text: "Patrol services",
        img: "/images/placeholder.jpg",
        description:
          "Patrol Services provide regular monitoring of properties, ensuring safety and security through routine checks and immediate response to incidents. Trained security personnel patrol designated areas to deter crime, identify potential threats, and maintain order.",
      },
      {
        text: "Risk assessment and mitigation",
        img: "/images/placeholder.jpg",
        description:
          "Risk Assessment and Mitigation is the process of identifying, analyzing, and addressing potential security threats to minimize vulnerabilities. Through comprehensive evaluations, security professionals assess risks such as theft, vandalism, cyber-attacks, and natural disasters.",
      },
    ],
  },
  {
    title: "High Profile Security",
    description:
      "Discreet Protection for High-Profile Clients. Our high-profile security services include:",
    details: [
      {
        text: "Personal protection officers",
        img: "/images/placeholder.jpg",
        description:
          "Personal Protection Officers (PPOs) are highly trained security professionals responsible for safeguarding individuals, especially high-profile clients such as executives, celebrities, or political figures. ",
      },
      {
        text: "Event security management",
        img: "/images/placeholder.jpg",
        description:
          "Event Security Management involves planning, coordinating, and executing security measures to ensure the safety of attendees, staff, and assets during events such as concerts, conferences, and festivals.",
      },
      {
        text: "Threat assessment and risk mitigation",
        img: "/images/placeholder.jpg",
        description:
          "Threat Assessment and Risk Mitigation is a systematic approach to identifying potential security threats and evaluating the associated risks to an organization or individual. This process begins with a thorough analysis of vulnerabilities, which includes evaluating internal and external factors that may pose a threat.",
      },
      {
        text: "Confidentiality and discretion",
        img: "/images/placeholder.jpg",
        description:
          "Confidentiality and Discretion are essential principles in security and personal protection services, ensuring that sensitive information and client privacy are maintained at all times. Security professionals are trained to handle confidential data responsibly, safeguarding personal details and operational information from unauthorized access or disclosure.",
      },
    ],
  },
  {
    title: "Special Events Security",
    description: "Expert Event Security Solutions. We offer:",
    details: [
      {
        text: "Event risk assessment",
        img: "/images/placeholder.jpg",
        description:
          "Event Risk Assessment is a critical process that involves identifying and evaluating potential risks associated with an event, such as concerts, conferences, or sporting events. This assessment aims to understand various threats that could disrupt the event or compromise the safety of attendees and staff.",
      },
      {
        text: "Security planning and coordination",
        img: "/images/placeholder.jpg",
        description:
          "Security Planning and Coordination involves developing and implementing comprehensive strategies to protect people, property, and assets during various operations or events. This process includes assessing potential risks, identifying security needs, and establishing protocols to address vulnerabilities effectively.",
      },
      {
        text: "Crowd management",
        img: "/images/placeholder.jpg",
        description:
          "Crowd Management involves strategies and techniques to control and direct large groups of people in various environments, such as concerts, sporting events, festivals, and public gatherings. The primary goal is to ensure safety, minimize risks, and enhance the overall experience for attendees.",
      },
      {
        text: "Access control and screening",
        img: "/images/placeholder.jpg",
        description:
          "Access Control and Screening are critical components of security management designed to prevent unauthorized entry and ensure the safety of individuals and assets within a facility or during an event.",
      },
      {
        text: "Emergency response planning",
        img: "/images/placeholder.jpg",
        description:
          "Emergency Response Planning involves developing structured procedures and protocols to effectively address and manage emergencies, ensuring the safety of individuals and minimizing damage to property and assets.",
      },
    ],
  },
  {
    title: "Security Escorts",
    description:
      "Safe and Secure Transportation. Our security escort services provide:",
    details: [
      {
        text: "Armed and unarmed escort options",
        img: "/images/placeholder.jpg",
        description:
          "Armed and Unarmed Escort Options provide tailored security solutions to meet the varying needs of individuals and organizations seeking protection during travel or public engagements.",
      },
      {
        text: "Secure transportation vehicles",
        img: "/images/placeholder.jpg",
        description:
          "Secure Transportation Vehicles are specially designed or modified vehicles that provide enhanced safety and protection for individuals and assets during transit. These vehicles are utilized in various contexts, including personal protection, asset transportation, and high-risk environments.",
      },
      {
        text: "Route planning and risk assessment",
        img: "/images/placeholder.jpg",
        description:
          "Route Planning and Risk Assessment are crucial components of security management, particularly in scenarios involving transportation, travel, or logistics. These processes help ensure the safe and efficient movement of individuals and assets by identifying potential threats along planned routes and implementing measures to mitigate those risks.",
      },
    ],
  },
];

export default function WhatPage() {
  return (
    <>
      <CoverSection
        title="WHAT WE DO"
        description="Explore our wide range of security services, meticulously tailored to meet the unique needs of our clients. From site surveillance and risk assessment to personalized security strategies, we ensure comprehensive protection for your business and assets."
      />

      <Container className="py-12 px-4">
        <h2 className="text-4xl font-bold mb-6 text-primary">Our Services</h2>
        <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
          At Stead Fast Security, we offer a comprehensive range of security
          services designed to protect individuals, businesses, and special
          events.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-foreground text-2xl font-bold">
                {service.title}
              </h4>
              <p className="text-foregroundMuted">{service.description}</p>
              <div className="space-y-4 mt-4">
                {service.details.map((detail, index) => (
                  <Accordion
                    key={index}
                    title={detail.text}
                    img={detail.img}
                    serviceIndex={service.title}
                    description={detail?.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Services />
    </>
  );
}

function Accordion({ title, img, serviceIndex, description = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = () => {
    setOpenIndex(openIndex === title ? null : title);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer border p-4"
        onClick={handleAccordionClick}
      >
        <h5 className="text-lg font-semibold text-secondary">{title}</h5>
        <span className="text-foregroundMuted">
          {openIndex === title ? "-" : "+"}
        </span>
      </div>
      {openIndex === title && (
        <div className="flex items-center mt-4 border p-2 md:p-4">
          <div className="text-foregroundMuted w-3/4 flex items-center md:p-8">
            <p>{description}</p>
          </div>
          <img
            src={img}
            alt={title}
            className="w-1/4 aspect-square object-cover rounded-full ml-4"
          />
        </div>
      )}
    </div>
  );
}
