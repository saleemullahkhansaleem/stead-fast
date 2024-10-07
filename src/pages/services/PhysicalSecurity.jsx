import { DetailPage } from "../../components";

export default function PhysicalSecurity() {
  return (
    <DetailPage
      title="Physical Security"
      description="Our comprehensive physical security services are designed to protect your assets, property, and personnel. We combine cutting-edge technology with highly trained personnel to ensure safety, reliability, and peace of mind for our clients, no matter the size or complexity of the task."
      imageUrl="/images/security/physical-security.webp"
      sideImages={[
        "/images/security/physical-security-1.webp",
        "/images/security/physical-security-2.webp",
      ]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Physical Security
      </h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        Our physical security solutions cater to various industries, including
        commercial, industrial, residential, and government institutions. Our
        team works closely with clients to tailor security plans addressing
        specific needs and concerns.
      </p>

      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            At “Stead Fast Security”, we understand the importance of physical
            security in safeguarding people, property, and assets. Our physical
            security services provide a robust layer of protection, deterring
            potential threats and ensuring a secure environment. Our services
            include:
          </p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li> Site assessments and vulnerability analysis</li>
            <li>Trained security personnel deployment</li>
            <li>Access control and surveillance systems integration</li>
            <li>Patrol services and alarm response</li>
            <li>Emergency response planning and evacuation procedures</li>
          </ul>
        </div>
      </div>
    </DetailPage>
  );
}
