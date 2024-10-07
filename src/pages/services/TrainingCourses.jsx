import { DetailPage } from "../../components";

export default function TrainingCourses() {
  return (
    <DetailPage
      title="Training Courses"
      description="Our comprehensive training courses equip security personnel with the knowledge and skills needed to handle various challenges in the field. From basic security protocols to advanced crisis management and specialized tactics, we ensure our teams are prepared for any situation."
      imageUrl="/images/security/placeholder.jpg"
      sideImages={[
        "/images/security/placeholder.jpg",
        "/images/security/placeholder.jpg",
      ]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Training Courses</h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        Our training programs are led by experienced instructors, focusing on
        practical application and scenario-based training. We cater to various
        industries, including corporate, government and private.
      </p>
      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            Stead Fast Security” offers a range of security training programs,
            designed to enhance skills and knowledge for security professionals
            and individuals. Our courses include:
          </p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Basic security awareness and protocols</li>
            <li>Conflict resolution and crisis management .</li>
            <li>Tactical training and self-defense</li>
            <li>Surveillance and intelligence gathering</li>
            <li>Emergency response and first aid</li>
          </ul>
        </div>
      </div>
    </DetailPage>
  );
}
