import { useState } from "react";
import { Button, Container, CoverSection, Input } from "../components";

export default function CareerApplyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData((prev) => ({ ...prev, resume: file }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data", formData);
  };

  return (
    <>
      {/* Cover Section */}
      <CoverSection
        title="Join Our Team"
        description="We're looking for talented individuals to join our growing team. Apply now and take the next step in your career!"
      />

      <div className="">
        <Container className="px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Career Application Form */}
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Apply for a Position</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                required
                onChange={handleChange}
                name="name"
                placeholder="Enter Your Name"
              />
              <Input
                required
                onChange={handleChange}
                name="email"
                placeholder="Enter Your Email"
                type="email"
              />
              <Input
                required
                onChange={handleChange}
                name="phone"
                placeholder="Enter Your Phone Number"
                type="tel"
              />
              <Input
                required
                field="select"
                onChange={handleChange}
                name="position"
                placeholder="Position You're Applying For"
                options={[
                  { label: "Select Position", value: "" },
                  { label: "Not Specified", value: "not-spacified" },
                  { label: "Frontend Developer", value: "frontend" },
                  { label: "Backend Developer", value: "backend" },
                ]}
              />
              <Input
                required
                onChange={handleFileChange}
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
              />
              <Input
                name="message"
                field="textarea"
                onChange={handleChange}
                placeholder="Additional Message (Optional)"
                rows={4}
                resize="false"
              />
              <Button type="submit" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>

          {/* Company Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
              <p className="text-foregroundMuted leading-relaxed">
                We're an innovative company focused on fostering a collaborative
                work environment. Be part of a team where your skills and
                passion will thrive!
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">
                Our Culture
              </h3>
              <p className="text-foregroundMuted">
                We believe in fostering creativity and providing opportunities
                for growth. Join a diverse team that values new ideas and
                collaboration.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Benefits</h3>
              <p className="text-foregroundMuted">
                Competitive salaries, health benefits, career development, and
                more. We provide a comprehensive benefits package to support
                your well-being.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}