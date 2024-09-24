import { useState } from "react";
import { Container, CoverSection } from "../components";
import { FaSearchPlus } from "react-icons/fa";

const approachContent = [
  {
    title: "Health, Safety & Environment Policy",
    imageUrl: "/images/approach/health-safety.webp",
  },
  {
    title: "INTERNATIONAL CODE OF CONDUCT (ICOC) Charter",
    imageUrl: "/images/approach/code-of-conduct.webp",
  },
  {
    title: "VOLUNTARY PRINCIPLES ON SECURITY & HUMAN RIGHTS (VPSHR) Manifesto",
    imageUrl: "/images/approach/human-rights.webp",
  },
  {
    title: "Personal Protective Equipment",
    imageUrl: "/images/approach/ppe.webp",
  },
  {
    title: "CORPORATE SOCIAL RESPONSIBILITY",
    imageUrl: "/images/approach/corporate-social.webp",
  },
  {
    title: "Training & Courses",
    imageUrl: "/images/approach/training.webp",
  },
];

export default function ApproachPage() {
  const [modalData, setModalData] = useState(null); // State to handle modal data

  const openModal = (item) => {
    setModalData(item);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <>
      {/* Cover Section */}
      <CoverSection
        title="Hedonistic Approach"
        description="AGS Security Services is committed to maintaining high standards of health, safety, and corporate responsibility through various policies and training programs."
      />
      {/* Grid Section */}
      import {FaSearchPlus} from "react-icons/fa"; // Make sure to import the
      zoom icon
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approachContent.map((item, index) => (
            <div
              key={index}
              className="group bg-background rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative"
              onClick={() => openModal(item)}
            >
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-opacity duration-300 shadow-lg" // Add shadow to the image
                />
                {/* Zoom icon in the center of the image */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaSearchPlus className="text-background text-3xl hover:text-secondary" />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-foregroundMuted">
                  Learn more about our commitment to security standards.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      {/* Modal Section */}
      {modalData && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-lg shadow-lg p-4 relative max-h-screen">
            <h3 className="text-xl font-semibold mb-4">{modalData.title}</h3>
            <button
              className="absolute top-0 right-3 text-4xl text-foregroundMuted hover:text-primary"
              onClick={closeModal}
            >
              &times; {/* Close icon */}
            </button>
            <div className="max-h-[calc(90vh-50px)] overflow-y-auto">
              <img
                src={modalData.imageUrl}
                alt={modalData.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
