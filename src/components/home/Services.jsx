import { Link } from "react-router-dom";
import Container from "../Container";

export default function Services() {
  const services = [
    {
      title: "SECURITY SERVICES",
      imageUrl: "/images/services/service-5.png",
      url: "/what-we-do",
    },
    {
      title: "BURGLAR ALARM",
      imageUrl: "/images/services/service-2.png",
      url: "/services/burglar-alarm",
    },
    {
      title: "SECURITY SYSTEMS",
      imageUrl: "/images/services/service-3.png",
      url: "/services/security-system",
    },
    {
      title: "TRAINING",
      imageUrl: "/images/services/service-4.png",
      url: "/services/training-courses",
    },
    {
      title: "CANINE",
      imageUrl: "/images/services/service-1.png",
      url: "/services/canine",
    },
  ];
  return (
    <section className="bg-secondary py-16 px-4">
      <Container className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-2 gap-y-8 md:gap-y-16">
        {services.map((service, index) => (
          <Link
            title={service.title}
            key={index}
            to={service.url}
            className={`flex flex-col justify-start items-center gap-4`}
          >
            <img src={service.imageUrl} alt="Service icon" className="w-36" />
            <p className="text-background text-center">{service.title}</p>
          </Link>
        ))}
      </Container>
    </section>
  );
}
