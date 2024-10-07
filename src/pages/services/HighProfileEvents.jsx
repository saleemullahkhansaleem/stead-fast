import { DetailPage } from "../../components";

export default function HighProfileEvents() {
  return (
    <DetailPage
      title="High Profile Events"
      description="Our specialized security services for high-profile events are tailored to manage large crowds, VIP guests, and potential risks. With expert planning and execution, we ensure seamless protection for all attendees, allowing your event to proceed without any security concerns."
      imageUrl="/images/security/placeholder.jpg"
      sideImages={[
        "/images/security/placeholder.jpg",
        "/images/security/placeholder.jpg",
      ]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        High Profile Events
      </h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        "Secure your high-profile events with our expert security solutions.
        From red-carpet galas to corporate conferences, we protect your guests,
        assets, and reputation."
      </p>

      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            Stead Fast Security” specialises in providing top-notch security
            services for high-profile events, ensuring the safety and security
            of distinguished guests, valuable assets, and your reputation. Our
            event security solutions include:
          </p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Risk assessments and threat analysis</li>
            <li>Customized security protocols</li>
            <li>Trained event staff and security personnel</li>
            <li>Access control and crowd management</li>
            <li>Surveillance and monitoring systems</li>
            <li>Emergency response planning</li>
          </ul>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            From VIP protection to event logistics, our experienced team works
            closely with event organizers to deliver seamless security
            solutions. We ensure discretion, professionalism, and unparalleled
            protection for your high-profile events.
          </p>
        </div>
      </div>
    </DetailPage>
  );
}
