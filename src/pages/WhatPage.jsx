import { MdSecurity } from "react-icons/md";
import { Container, CoverSection, DetailPage, Services } from "../components";
import { useState } from "react";

const services = [
  {
    title: "Physical Security",
    description: "Secure Environments. We provide:",
    details: [
      { text: "Access control systems", img: "/images/placeholder.jpg" },
      { text: "CCTV surveillance", img: "/images/placeholder.jpg" },
      { text: "Alarm systems", img: "/images/placeholder.jpg" },
      { text: "Patrol services", img: "/images/placeholder.jpg" },
      {
        text: "Risk assessment and mitigation",
        img: "/images/placeholder.jpg",
      },
    ],
  },
  {
    title: "High Profile Security",
    description:
      "Discreet Protection for High-Profile Clients. Our high-profile security services include:",
    details: [
      { text: "Personal protection officers", img: "/images/placeholder.jpg" },
      { text: "Event security management", img: "/images/placeholder.jpg" },
      {
        text: "Threat assessment and risk mitigation",
        img: "/images/placeholder.jpg",
      },
      {
        text: "Confidentiality and discretion",
        img: "/images/placeholder.jpg",
      },
    ],
  },
  {
    title: "Special Events Security",
    description: "Expert Event Security Solutions. We offer:",
    details: [
      { text: "Event risk assessment", img: "/images/placeholder.jpg" },
      {
        text: "Security planning and coordination",
        img: "/images/placeholder.jpg",
      },
      { text: "Crowd management", img: "/images/placeholder.jpg" },
      { text: "Access control and screening", img: "/images/placeholder.jpg" },
      { text: "Emergency response planning", img: "/images/placeholder.jpg" },
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
      },
      {
        text: "Secure transportation vehicles",
        img: "/images/placeholder.jpg",
      },
      {
        text: "Route planning and risk assessment",
        img: "/images/placeholder.jpg",
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
        <div className="flex items-center mt-4 border p-2 md:p-4">
          <div className="text-foregroundMuted w-3/4 flex items-center md:p-8">
            <p>
              A short description about {title} can go here. This can include
              key features or benefits of the service.
            </p>
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
