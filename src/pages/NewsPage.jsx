// import { newsArticlesData } from '../data/newsArticles'; // assuming you have a separate data file for articles

import { Container, CoverSection } from "../components";

const newsArticles = [
  {
    title: "New Security Guard Training Program Launched",
    content:
      "Our company has launched a comprehensive training program to enhance the skills of our security personnel, focusing on emergency response and customer service.",
    date: "September 21, 2024",
    author: "John Doe",
    category: "Training",
    imageUrl: "/images/security/s6.jpg",
  },
  {
    title: "Successful Partnership with Local Businesses",
    content:
      "We are proud to announce our new partnership with several local businesses to enhance security measures and provide a safer environment for their customers.",
    date: "September 20, 2024",
    author: "Jane Smith",
    category: "Business",
    imageUrl: "/images/security/s6.jpg",
  },
  {
    title: "Implementing Advanced Surveillance Technology",
    content:
      "Our security company is integrating advanced surveillance technology, including AI-based monitoring systems, to improve security effectiveness.",
    date: "September 19, 2024",
    author: "Michael Johnson",
    category: "Technology",
    imageUrl: "/images/security/s6.jpg",
  },
  {
    title: "Community Safety Awareness Campaign",
    content:
      "We are launching a community safety awareness campaign aimed at educating residents on security measures and crime prevention strategies.",
    date: "September 18, 2024",
    author: "Sarah Connor",
    category: "Community",
    imageUrl: "/images/security/s6.jpg",
  },
];

export default function NewsPage() {
  return (
    <>
      <CoverSection title="Latest News" />
      <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12">
        {newsArticles.map((article, index) => (
          <div
            key={index}
            className="bg-background rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/60 to-transparent w-full h-full px-6 py-2 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-background mb-1">
                  {article.title}
                </h2>
                <p className="text-sm text-backgroundMuted mb-4">
                  {article.date} | {article.author}
                </p>
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-secondary uppercase">
                  {article.category}
                </span>
              </div>
              <p className="text-foregroundMuted text-lg leading-relaxed">
                {article.content}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
