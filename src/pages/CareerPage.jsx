import { Link } from "react-router-dom";
import { Button, Container, CoverSection, Spinner } from "../components";
import api from "../http/api";
import { useEffect, useState } from "react";

export const benefits = [
  {
    title: "Life Insurance",
    description:
      "We offer comprehensive life insurance coverage to give you and your family peace of mind in the face of life’s uncertainties, ensuring financial stability during tough times.",
  },
  {
    title: "EOBI Registered",
    description:
      "As an EOBI (Employees' Old-Age Benefits Institution) registered company, we ensure that all our employees are entitled to pension and retirement benefits, offering long-term financial security.",
  },
  {
    title: "ESSI Registered",
    description:
      "We are registered with the Employees Social Security Institution (ESSI), providing our team with health insurance, disability benefits, and maternity leave to safeguard your well-being.",
  },
];

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
export default function CareerPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    api
      .get("jobs")
      .then((response) => {
        if (response.success) {
          setJobs(response.data);
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
        title="Join Our Team"
        description="We're on a mission to build innovative products and deliver top-tier security services. If you're passionate, driven, and ready to make a real impact, we'd love to have you on board. Come grow with us and help shape the future of security!"
      />

      <Container className="px-4 my-12 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Work With Us?</h2>
        <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
          We are a team of passionate innovators committed to providing a
          supportive and rewarding work environment. Join us and enjoy a career
          that offers growth, stability, and security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`"bg-background p-6 shadow-lg w-full max-w-96 m-auto aspect-square flex flex-col gap-2 items-center justify-center rounded-full border-4 border-secondary transition-transform transform hover:scale-105 hover:shadow-xl ${
                index === 0 && "md:col-span-2 xl:col-span-1"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-foregroundMuted px-8">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>

      <div id="jobs" className="bg-background">
        <Container className=" px-4 py-12">
          <h2 className="text-4xl font-bold text-center mb-12">
            Current Openings
          </h2>
          <div className="space-y-8">
            {loading ? (
              <Spinner />
            ) : jobs.length === 0 ? (
              <div className="flex flex-col justify-center items-center gap-4 text-4xl px-4 py-12 font-bold text-primary">
                <p>No Jpbs Found!</p>
                <div className="mt-4">
                  <Button href="/">Back to Home</Button>
                </div>
              </div>
            ) : (
              jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-muted p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-foregroundMuted mb-4">
                    location: {job.location} | {job.no_of_vacancies} positions |
                    Age limit: {job.min_age} - {job.max_age}
                  </p>
                  <p className="text-sm text-primary mb-4">
                    Deadline: {job.expired_date}
                  </p>
                  <p className="text-foreground mb-6">{job.description}</p>
                  <Link
                    to="/career-apply"
                    className="text-primary font-bold hover:text-secondary transition-colors"
                  >
                    Apply Now &rarr;
                  </Link>
                </div>
              ))
            )}
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div id="apply" className="bg-secondary text-background">
        <Container className="py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Team of Dedicated Professionals
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Are you ready to take on the challenge of providing safety and
            protection in a dynamic environment? If you’re passionate about
            security and want to be part of a trusted team, we’d love to have
            you on board.
          </p>
          <Button href="/career-apply">Apply Now</Button>
        </Container>
      </div>
    </>
  );
}
