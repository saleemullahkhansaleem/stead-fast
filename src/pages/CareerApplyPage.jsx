import { useState } from "react";
import { Button, Container, CoverSection, Input } from "../components";
import api from "../http/api";
import { benefits } from "./CareerPage";
import { toast } from "react-toastify";

export default function CareerApplyPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    job_position: "",
    resume: null,
    message: "",
  });

  const positionOptions = [
    { label: "Please Select Position", value: "" },
    {
      label: "Senior Security Supervisor",
      value: "senior-security-supervisor",
    },
    { label: "Security Supervisor", value: "security-supervisor" },
    { label: "Security Guard", value: "security-guard" },
    { label: "Driver", value: "driver" },
    { label: "Cook", value: "cook" },
  ];

  // Handle change for input fields other than file
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file change
  const handleFileChange = ({ target: { files } }) => {
    setFormData((prev) => ({ ...prev, resume: files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await api.post("job-request", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.success) {
        toast.success(response.message);
        resetForm();
      } else {
        toast.error(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Reset form after submission
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      job_position: "",
      resume: null,
      message: "",
    });
  };

  return (
    <>
      {/* Cover Section */}
      <CoverSection
        title="Join Our Team"
        description="We're looking for talented individuals to join our growing team. Apply now and take the next step in your career!"
      />

      <div>
        <Container className="px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Career Application Form */}
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Apply for a Position</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input
                required
                onChange={handleChange}
                value={formData.name}
                name="name"
                placeholder="Enter Your Name"
              />
              <Input
                required
                onChange={handleChange}
                value={formData.email}
                name="email"
                placeholder="Enter Your Email"
                type="email"
              />
              <Input
                required
                onChange={handleChange}
                value={formData.contact}
                name="contact"
                placeholder="Enter Your Phone Number"
                type="tel"
              />
              <Input
                required
                field="select"
                onChange={handleChange}
                value={formData.job_position}
                name="job_position"
                placeholder="Position You're Applying For"
                options={positionOptions}
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
                value={formData.message}
                placeholder="Additional Message (Optional)"
                rows={4}
                resize="false"
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
              <p className="text-foregroundMuted leading-relaxed">
                We're an innovative company focused on fostering a collaborative
                work environment. Be part of a team where your skills and
                passion will thrive!
              </p>
            </div>

            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {benefit.title}
                </h3>
                <p className="text-foregroundMuted">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
