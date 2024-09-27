import {
  AboutSection,
  CoverSection,
  EmergencyNumbers,
  LogoCarousel,
  MainSection,
  Services,
} from "../components";

export default function Home() {
  const buttons = [
    {
      label: "Burglar Alarm",
      url: "/services/burglar-alarm",
    },
    {
      label: "Physical Security",
      url: "/services/physical-security",
    },
    {
      label: "High Profile Special Events",
      url: "/services/high-profile-events",
    },
    {
      label: "Security Escort",
      url: "/services/security-escort",
    },
    {
      label: "Training & Courses",
      url: "/services/training-courses",
    },
    {
      label: "Bullet Proof Vehicles",
      url: "/services/bullet-proof-vehicles",
    },
    {
      label: "Organogram",
      url: "/services/organogram",
    },
  ];

  return (
    <>
      <CoverSection
        title="Comprehensive Security Solutions"
        description="With over a decade of experience, Stead Fast Security offers tailored services for individuals, businesses, and events. We prioritize safety, professionalism, and the latest technology to provide reliable protection and peace of mind."
        buttons={buttons}
      />
      <AboutSection />
      <MainSection />
      <Services />
      <LogoCarousel />
      <EmergencyNumbers />
    </>
  );
}
