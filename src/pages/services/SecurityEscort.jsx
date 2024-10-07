import { DetailPage } from "../../components";

export default function SecurityEscort() {
  return (
    <DetailPage
      title="Security Escort"
      description="Our professional security escort services ensure safe and secure transportation for individuals, high-value assets, and sensitive information. Whether it's VIPs, executives, or valuable goods, our highly trained personnel guarantee protection throughout the journey, mitigating any potential risks."
      imageUrl="/images/security/s5.jpg"
      sideImages={[
        "/images/security/placeholder.jpg",
        "/images/security/placeholder.jpg",
      ]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">Security Escort</h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        Our escort services cater to various needs, including executive
        protection, asset transportation, and individual safety. Our personnel
        are highly trained, discreet, and experienced in handling sensitive
        situations.
      </p>

      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            Stead Fast Security” offers reliable escort services, providing
            secure transportation for individuals, groups, and valuable assets.
            Our escort services incl
          </p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Armed / unarmed escort personnel</li>
            <li>Secure vehicle transportation</li>
            <li>Route planning and risk assessment</li>
            <li>Real-time tracking and monitoring</li>
            <li>Emergency response protocols</li>
          </ul>
        </div>
      </div>
    </DetailPage>
  );
}
