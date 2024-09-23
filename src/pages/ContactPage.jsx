import { Button, Container, CoverSection, Input } from "../components";

export default function ContactPage() {
  return (
    <>
      {/* Cover Section */}
      <CoverSection
        title="Get in Touch"
        description="We'd love to hear from you. Whether you have questions or need support, feel free to reach out!"
      />

      <div className="">
        <Container className="px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <form className="space-y-4">
              <Input label="Name" placeholder="Your Name" />
              <Input label="Email" placeholder="Your Email" type="email" />
              <Input label="Subject" placeholder="Message Subject" />
              <div>
                <label className="block text-sm font-medium text-foregroundMuted">
                  Message
                </label>
                <textarea
                  className="mt-1 p-2 block w-full border border-muted rounded-md shadow-sm focus:ring-secondary focus:border-secondary sm:text-sm"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
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
            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Our Office</h3>
              <p className="text-foregroundMuted">
                office#5 Al-Malik Centre (Third Floor) 70 West Jinnah Avenue
                Blue Area Islamabad
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Phone</h3>
              <p className="text-foregroundMuted">051-2803190-91</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Email</h3>
              <p className="text-foregroundMuted">
                contact@steadfastsecurity.com.pk
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Map Section (You can replace this with an actual map embed later) */}
      <section className="bg-background py-12">
        <Container className="px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
          <div className="w-full h-64 bg-gray-400 rounded-lg">
            {/* Placeholder for Map */}
            <p className="text-gray-600 leading-loose">
              Map will be displayed here (Google Maps or similar)
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
