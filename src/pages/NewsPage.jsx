import { Button } from "../components";

const newsArticles = [
  {
    title: "New Security Guard Training Program Launched",
    content:
      "Our company has launched a comprehensive training program to enhance the skills of our security personnel, focusing on emergency response and customer service.",
    date: "September 21, 2024",
  },
  {
    title: "Successful Partnership with Local Businesses",
    content:
      "We are proud to announce our new partnership with several local businesses to enhance security measures and provide a safer environment for their customers.",
    date: "September 20, 2024",
  },
  {
    title: "Implementing Advanced Surveillance Technology",
    content:
      "Our security company is integrating advanced surveillance technology, including AI-based monitoring systems, to improve security effectiveness.",
    date: "September 19, 2024",
  },
  {
    title: "Community Safety Awareness Campaign",
    content:
      "We are launching a community safety awareness campaign aimed at educating residents on security measures and crime prevention strategies.",
    date: "September 18, 2024",
  },
];

export default function NewsPage() {
  return (
    <div className="bg-backgroundMuted min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Latest News
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">{article.date}</p>
                <p className="text-gray-700">{article.content}</p>
              </div>
              <div className="bg-gray-100 p-4 text-center">
                <Button>Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
