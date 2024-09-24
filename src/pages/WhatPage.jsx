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
        img: "images/approach/human-rights.webp",
      },
      { text: "CCTV surveillance", img: "physical_cctv.jpg" },
      { text: "Alarm systems", img: "physical_alarm.jpg" },
      { text: "Patrol services", img: "physical_patrol.jpg" },
      { text: "Risk assessment and mitigation", img: "physical_risk.jpg" },
    ],
  },
  {
    title: "High Profile Security",
    description:
      "Discreet Protection for High-Profile Clients. Our high-profile security services include:",
    details: [
      { text: "Personal protection officers", img: "high_profile_officer.jpg" },
      { text: "Event security management", img: "high_profile_event.jpg" },
      {
        text: "Threat assessment and risk mitigation",
        img: "high_profile_threat.jpg",
      },
      {
        text: "Confidentiality and discretion",
        img: "high_profile_confidentiality.jpg",
      },
    ],
  },
  {
    title: "Special Events Security",
    description: "Expert Event Security Solutions. We offer:",
    details: [
      { text: "Event risk assessment", img: "events_risk.jpg" },
      {
        text: "Security planning and coordination",
        img: "events_planning.jpg",
      },
      { text: "Crowd management", img: "events_crowd.jpg" },
      { text: "Access control and screening", img: "events_access.jpg" },
      { text: "Emergency response planning", img: "events_emergency.jpg" },
    ],
  },
  {
    title: "Security Escorts",
    description:
      "Safe and Secure Transportation. Our security escort services provide:",
    details: [
      { text: "Armed and unarmed escort options", img: "escorts_armed.jpg" },
      { text: "Secure transportation vehicles", img: "escorts_transport.jpg" },
      { text: "Route planning and risk assessment", img: "escorts_route.jpg" },
    ],
  },
];

export default function WhatPage() {
  return (
    <>
      <CoverSection
        title="WHAT WE DO"
        description="Explore our range of security services tailored to meet your needs."
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

function Accordion({ title, img, serviceIndex }) {
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
        <div className="flex mt-4 border p-4">
          <div className="text-foregroundMuted w-3/4">
            <p>
              A short description about {title} can go here. This can include
              key features or benefits of the service.
            </p>
          </div>
          <img
            src={img}
            alt={title}
            className="w-1/4 h-auto object-cover rounded-md ml-4"
          />
        </div>
      )}
    </div>
  );
}
