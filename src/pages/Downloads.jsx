import { Button, Container, CoverSection } from "../components";

const downloads = [
  {
    id: 1,
    title: "Pakistan Arms Rules (Ministry of Interior), 2021",
    preview: "/files/the-pakistan-arms-rules-2021.pdf",
    downloadLink: "/files/the-pakistan-arms-rules-2021.pdf",
  },
  {
    id: 2,
    title:
      "The Standard Operating Procedure (SOP) (Ministry of Interior), 2020",
    preview: "/files/the-standard-operating-procedure-2020.pdf",
    downloadLink: "/files/the-standard-operating-procedure-2020.pdf",
  },
  {
    id: 3,
    title: "The ICT Private Security Companies Ordinance, 2001",
    preview: "/files/the-ict-private-security-companies-ordinance-2001.pdf",
    downloadLink:
      "/files/the-ict-private-security-companies-ordinance-2001.pdf",
  },
  // {
  //   id: 4,
  //   title: "The Khyber Pakhtunkhwa Laws (Amendment) Act, 2011",
  //   preview: "/files/the-khyber-pakhtunkhwa-laws-amendment-act-2011.pdf",
  //   downloadLink: "/files/the-khyber-pakhtunkhwa-laws-amendment-act-2011.pdf",
  // },
  {
    id: 5,
    title: "The Khyber Pakhtunkhwa Private Security Companies Rules, 2003",
    preview:
      "/files/the-khyber-pakhtunkhwa-private-security-companies-rules-2003.pdf",
    downloadLink:
      "/files/the-khyber-pakhtunkhwa-private-security-companies-rules-2003.pdf",
  },
  {
    id: 6,
    title: "The Khyber Pakhtunkhwa Private Security Companies Ordinance, 2002",
    preview:
      "/files/the-khyber-pakhtunkhwa-private-security-companies-ordinance-2002.pdf",
    downloadLink:
      "/files/the-khyber-pakhtunkhwa-private-security-companies-ordinance-2002.pdf",
  },
  {
    id: 7,
    title:
      "The Punjab Private Security Companies (Regulation and Control) (Amendment) Act 2004",
    preview:
      "/files/the-punjab-private-security-companies-regulation-and-control-amendment-act-2004.pdf",
    downloadLink:
      "/files/the-punjab-private-security-companies-regulation-and-control-amendment-act-2004.pdf",
  },
  // {
  //   id: 8,
  //   title:
  //     "The Punjab Private Security Companies Regulation and Control Ordinance, 2003",
  //   preview:
  //     "/files/the-punjab-private-security-companies-regulation-and-control-ordinance-2003.pdf",
  //   downloadLink:
  //     "/files/the-punjab-private-security-companies-regulation-and-control-ordinance-2003.pdf",
  // },
  {
    id: 9,
    title:
      "The Punjab Private Security Companies (Regulation and Control) Ordinance, 2002",
    preview:
      "/files/the-punjab-private-security-companies-regulation-and-control-ordinance-2002.pdf",
    downloadLink:
      "/files/the-punjab-private-security-companies-regulation-and-control-ordinance-2002.pdf",
  },
];

export default function Downloads() {
  return (
    <>
      <CoverSection
        title="Downloads"
        description="Stead Fast Security Company is dedicated to ensuring the highest levels of safety and compliance. Explore our collection of essential policies, procedures, and regulations to learn more about how we maintain excellence in private security."
      />
      <Container className="py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative"
            >
              <div className="relative h-56">
                <iframe
                  src={item.preview}
                  title={item.title}
                  className="absolute inset-0 w-full h-full border-none"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-20">
                  {item.title}
                </h2>

                <Button
                  href={item.downloadLink}
                  download
                  className="absolute bottom-4 right-4"
                >
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
