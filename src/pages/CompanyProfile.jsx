import { useState } from "react";
import { Container, CoverSection, DetailPage } from "../components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CompanyProfile() {
  const images = [
    "/images/company_profile/1.webp",
    "/images/company_profile/2.webp",
    "/images/company_profile/3.webp",
    "/images/company_profile/4.webp",
    "/images/company_profile/5.webp",
    "/images/company_profile/6.webp",
    "/images/company_profile/7.webp",
    "/images/company_profile/8.webp",
    "/images/company_profile/9.webp",
    "/images/company_profile/10.webp",
    "/images/company_profile/11.webp",
    "/images/company_profile/12.webp",
    "/images/company_profile/13.webp",
    "/images/company_profile/14.webp",
    "/images/company_profile/16.webp",

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Functions to handle next and previous image change
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <CoverSection
        title="Company Profile"
        description="At Stead Fast Security, We specialize in providing comprehensive security solutions tailored for high-profile events and exclusive gatherings. With years of experience in handling security for prestigious events, our team is equipped to address every security need from safeguarding VIP guests to managing large crowds with utmost discretion."
      />

      <Container className="py-12 px-4">
      <div className="relative w-full h-[40rem] overflow-hidden flex items-center justify-center">
        {/* Image display with "page flip" effect */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Company Profile ${index + 1}`}
            className={`absolute h-full object-contain transition-opacity duration-1000 ease-in-out transform ${
              index === currentImageIndex
                ? "opacity-100 animate-flip"
                : "opacity-0"
            }`}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full transition duration-300"
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-3 rounded-full transition duration-300"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </Container>
    </>
  );
}
