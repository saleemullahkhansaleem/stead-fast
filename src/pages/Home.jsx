import {
  CoverSection,
  EmergencyNumbers,
  LogoCarousel,
  MainSection,
  Services,
} from "../components";

export default function Home() {
  return (
    <>
      <CoverSection title="highest standards of Security Services" />
      <MainSection />
      <Services />
      <LogoCarousel />
      <EmergencyNumbers />
    </>
  );
}
