import {
  CoverSection,
  EmergencyNumbers,
  LogoCarousel,
  MainSection,
  Services,
} from "../components";

export default function Home() {
  const buttons = [
    {
      label: "Physical Security",
      url: "/physical-security",
    },
    {
      label: "High Profile Special Events",
      url: "/high-profile-events",
    },
    {
      label: "Security Escort",
      url: "/security-escort",
    },
    {
      label: "Training & Courses",
      url: "/training-courses",
    },
    {
      label: "Bullet Proof Vehicles",
      url: "/bullet-proof-vehicles",
    },
  ];

  return (
    <>
      <CoverSection
        title="highest standards of Security Services"
        buttons={buttons}
      />
      <MainSection />
      <Services />
      <LogoCarousel />
      <EmergencyNumbers />
    </>
  );
}
