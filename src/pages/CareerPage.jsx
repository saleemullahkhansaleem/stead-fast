import { Link } from "react-router-dom";
import { Button, Container, CoverSection } from "../components";

export default function CareerPage() {
  const jobListings = [
    {
      title: "Senior React Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a Senior React Developer to join our dynamic team and build cutting-edge web applications using modern technologies.",
    },
    {
      title: "UI/UX Designer",
      location: "New York, NY",
      type: "Full-Time",
      description:
        "Seeking a creative UI/UX Designer to craft intuitive and visually appealing user interfaces for our applications.",
    },
    {
      title: "Backend Engineer",
      location: "San Francisco, CA",
      type: "Full-Time",
      description:
        "Join us as a Backend Engineer to design and develop highly scalable backend services and APIs.",
    },
  ];

  return (
    <>
      <CoverSection
        title="Join Our Team"
        description="We're on a mission to build innovative products. Come make an impact!"
      />

      {/* About Company Section */}
      <Container className="px-4 my-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We are a team of passionate innovators who love solving complex
          problems. Our mission is to foster a culture of collaboration,
          creativity, and personal growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Remote Flexibility</h3>
            <p className="text-gray-700">
              Work from anywhere with flexible hours, so you can manage your
              work-life balance effectively.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Growth Opportunities</h3>
            <p className="text-gray-700">
              We invest in your professional development with training programs,
              mentorship, and career advancement opportunities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Innovative Culture</h3>
            <p className="text-gray-700">
              Be part of a team that values creativity, innovation, and
              collaboration. We thrive on building impactful solutions.
            </p>
          </div>
        </div>
      </Container>

      {/* Job Listings Section */}
      <div id="jobs" className="bg-background">
        <Container className=" px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Current Openings
          </h2>
          <div className="space-y-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-muted p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {job.title}
                </h3>
                <p className="text-sm text-foregroundMuted mb-4">
                  {job.location} | {job.type}
                </p>
                <p className="text-foreground mb-6">{job.description}</p>
                <Link
                  to="/career-apply"
                  className="text-primary font-bold hover:text-secondary transition-colors"
                >
                  Apply Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div id="apply" className="bg-secondary text-background">
        <Container className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8">
            If you're excited about making a meaningful impact and working in an
            environment where your ideas are valued, we'd love to hear from you.
          </p>
          <Button href="/career-apply">Apply Now</Button>
        </Container>
      </div>
    </>
  );
}
