import Button from "../Button";
import Container from "../Container";

export default function AboutSection() {
  return (
    <Container className="py-12 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-4xl font-bold mb-4 text-primary">
          About Stead Fast
        </h2>
        <h3 className="text-3xl font-semibold mb-2 text-secondary">
          Highest Standards Of Security Services
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Stead Fast Security Company (Private) Limited was established in 2007
          with a vision to provide exceptional security services in Pakistan.
          Our leadership team comprises experienced security professionals
          committed to delivering top-notch solutions.
        </p>{" "}
        <div className="py-2">
          <Button href="/about-us">Read More</Button>
        </div>
      </div>
    </Container>
  );
}
