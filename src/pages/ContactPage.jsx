import { useState } from "react";
import { Button, Container, CoverSection, Input } from "../components";
import api from "../http/api";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const contactInfo = [
    {
      title: "Our Office",
      content:
        "Office No: 5 Al-Malik Centre (Third Floor) 70 West Jinnah Avenue Blue Area Islamabad",
    },
    {
      title: "Phone",
      content: "051-8739888",
    },
    {
      title: "Email",
      content: "contact@steadfastsecurity.com.pk",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prv) => ({ ...prv, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    api
      .post("contact-us", formData)
      .then((response) => {
        if (response.success) {
          toast.success(response.message);
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          toast.error(
            "There was an issue with your submission. Please try again."
          );
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
      {/* Cover Section */}
      <CoverSection
        title="Get in Touch"
        description="We'd love to hear from you. Whether you have questions, need support, or want to learn more about our security solutions, feel free to reach out. Our team is ready to assist you with personalized service and prompt responses."
      />

      <div className="">
        <Container className="px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
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
                value={formData.subject}
                name="subject"
                placeholder="Enter Message Subject"
              />
              <Input
                required
                onChange={handleChange}
                value={formData.message}
                name="message"
                field="textarea"
                placeholder="Enter Your Message"
                rows={4}
                resize="false"
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-foregroundMuted leading-relaxed">
                We're here to help! You can reach us using the form, or via the
                details below.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-primary">
                  {info.title}
                </h3>
                <p className="text-foregroundMuted">{info.content}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Map Section */}
      <section className="bg-background py-12">
        <Container className="px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
          <div className="w-full h-64 bg-gray-400 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8518850242463!2d73.06003167616632!3d33.712781335577745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfa2cab19deb%3A0xfc0b014ecba12e3c!2sSteadfast%20Security%20Company!5e0!3m2!1sen!2s!4v1727176932110!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
    </>
  );
}
