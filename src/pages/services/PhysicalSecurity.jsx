import { Container, CoverSection, DetailPage } from "../../components";
import { MdSecurity } from "react-icons/md";

export default function PhysicalSecurity() {
  return (
    <DetailPage
      title="Physical Security"
      description="Discover who we are and what drives us to deliver exceptional security services."
      imageUrl="s5.jpg"
      reverse
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Physical Security
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Stead Fast Security Company (Private) Limited was established in 2007
        with a vision to provide exceptional security services in Pakistan. Our
        leadership team comprises experienced security professionals committed
        to delivering top-notch solutions.
      </p>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">VISION:</h6>
          <p className="text-gray-700">
            Protecting Lives, Securing Futures. At Stead Fast Security, our
            vision is to become the leading private security provider in
            Pakistan, delivering top-notch services that ensure the safety and
            security of our clients, their assets, and the community. We strive
            to set the standard for excellence in the security industry,
            fostering trust and peace of mind through our unwavering commitment
            to exceptional service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">MISSION:</h6>
          <p className="text-gray-700">
            Delivering Excellence in Security. Our mission is to provide expert
            security solutions tailored to meet the unique needs of our clients,
            fostering trust and peace of mind through our unwavering commitment
            to excellence.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">
            We are dedicated to:
          </h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700">
            <li>Delivering reliable and responsive security services</li>
            <li>
              Empowering our teams through continuous training and development
            </li>
            <li>Building long-term relationships with our clients</li>
            <li>Investing in cutting-edge technology and equipment</li>
          </ul>
        </div>
      </div>
    </DetailPage>
  );
}
