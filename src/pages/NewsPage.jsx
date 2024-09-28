import { useEffect, useState } from "react";
import {
  Button,
  CircleImage,
  Container,
  CoverSection,
  Spinner,
} from "../components";
import api from "../http/api";
import { FaSearchPlus } from "react-icons/fa";

// const newsArticles = [
//   {
//     title: "New Security Guard Training Program Launched",
//     content:
//       "Our company has introduced a new, comprehensive training program designed to strengthen our security personnel's skills, with a focus on emergency response, customer service, and conflict resolution.",
//     date: "September 21, 2024",
//     author: "John Doe",
//     category: "Training",
//     imageUrl: "/images/security/s6.jpg",
//   },
//   {
//     title: "Successful Collaboration with Local Businesses",
//     content:
//       "We are pleased to announce a new collaboration with local businesses to enhance security measures and create safer environments for their employees and customers.",
//     date: "September 20, 2024",
//     author: "Jane Smith",
//     category: "Business",
//     imageUrl: "/images/security/s6.jpg",
//   },
//   {
//     title: "Advanced Surveillance Technology Now in Use",
//     content:
//       "Our security team is now equipped with cutting-edge surveillance technology, including AI-based monitoring systems, to provide more efficient and effective protection services.",
//     date: "September 19, 2024",
//     author: "Michael Johnson",
//     category: "Technology",
//     imageUrl: "/images/security/s6.jpg",
//   },
//   {
//     title: "Community Safety Awareness Campaign Launched",
//     content:
//       "We are launching a community-wide safety awareness campaign to educate residents on the importance of security measures and provide practical crime prevention strategies.",
//     date: "September 18, 2024",
//     author: "Sarah Connor",
//     category: "Community",
//     imageUrl: "/images/security/s6.jpg",
//   },
// ];

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (item) => {
    setModalData(item);
  };

  const closeModal = () => {
    setModalData(null);
  };

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    api
      .get("news")
      .then((response) => {
        if (response.success) {
          setNews(response.data);
        } else {
          toast.error("");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <CoverSection
        title="Latest News"
        description="Stay updated with the latest developments in the security industry. From new technology and training programs to community safety initiatives, explore how we are committed to keeping you safe and secure."
      />

      {loading ? (
        <Spinner />
      ) : news.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-4 text-4xl px-4 py-12 font-bold text-primary">
          <p>No News Found!</p>
          <div className="mt-4">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      ) : (
        <>
          <Container className="py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article, index) => (
                <div
                  key={index}
                  className="group bg-background rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative"
                  onClick={() => openModal(article)}
                >
                  <div className="relative p-6">
                    <CircleImage imageUrl={article.imageUrl} />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <FaSearchPlus className="text-background text-3xl hover:text-secondary" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow ">
                    <p className="text-xs text-background mb-4 flex gap-2">
                      <span className="bg-secondary px-3 py-1 rounded-full">
                        {article?.published_date || "--"}
                      </span>{" "}
                      <span className="bg-secondary px-3 py-1 rounded-full">
                        {article?.author || "--"}
                      </span>{" "}
                      <span className="bg-primary px-3 py-1 rounded-full">
                        {article?.category || "--"}
                      </span>{" "}
                    </p>
                    <h3 className="text-xl font-semibold mb-4">
                      {article.title}
                    </h3>
                    <p className="text-foregroundMuted">{article?.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
          {/* Modal Section */}
          {modalData && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
              <div className="bg-background rounded-lg shadow-lg p-4 relative max-h-screen">
                <h3 className="text-xl font-semibold mb-4">
                  {modalData.title}
                </h3>
                <div className="">
                  <p className="text-sm text-background flex gap-2 mb-2">
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      Publish date: {modalData?.published_date || "--"}
                    </span>{" "}
                    <span className="bg-secondary px-3 py-1 rounded-full">
                      Auther: {modalData?.author || "--"}
                    </span>{" "}
                    <span className="bg-primary px-3 py-1 rounded-full">
                      Category: {modalData?.category || "--"}
                    </span>{" "}
                  </p>
                  <p className="text-foregroundMuted mb-4">
                    {modalData?.content}
                  </p>
                </div>
                <button
                  className="absolute top-0 right-3 text-4xl text-foregroundMuted hover:text-primary"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div className="relative max-h-[calc(90vh-50px)] overflow-y-auto">
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
      )}
    </>
  );
}
