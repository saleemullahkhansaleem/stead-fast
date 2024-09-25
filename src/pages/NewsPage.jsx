import { useEffect, useState } from "react";
import { Container, CoverSection } from "../components";
import api from "../http/api";

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

      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-background rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={article?.imageUrl}
                alt={article?.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/60 to-transparent w-full h-full px-6 py-2 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-background mb-1">
                  {article?.title}
                </h2>
                <p className="text-sm text-backgroundMuted mb-4">
                  {article?.published_date || "--"} | {article?.author || "--"}
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-secondary uppercase">
                  {article?.category || "--"}
                </span>
              </div>
              <p className="text-foregroundMuted text-lg leading-relaxed">
                {article?.content}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
