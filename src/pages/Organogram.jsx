import { Button, Container, CoverSection, Services } from "../components";

export default function Organogram() {
  return (
    <>
      <CoverSection
        title="ORGANOGRAM"
        description="The organizational structure of Stead Fast Security Company (Pvt.) Ltd. showcases a clear hierarchy designed to ensure efficient decision-making, seamless communication, and effective management of security services. Our structure allows us to maintain operational excellence and provide superior security solutions tailored to meet our clients' needs."
      />

      <Container className="px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          ORGANIZATIONAL STRUCTURE
        </h2>
        <img
          className="mx-auto p-4"
          src="/images/orgnizational-structure.png"
          alt="ORGANIZATIONAL STRUCTURE"
        />
      </Container>
      <Container className="px-4 py-8">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Operational Model
        </h2>
        <p className="text-lg text-foregroundMuted leading-relaxed mb-6">
          Our operational model covers mainly the following aspects:
        </p>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <ul className="list-disc list-inside space-y-4 text-foregroundMuted">
            <li>
              Scope of work within the company and at each individual site
            </li>
            <li>
              Site due diligence before finalizing a service level agreement
            </li>
            <li>Adherence to contract terms and conditions with clients</li>
            <li>Confidentiality</li>
            <li>Strike action</li>
            <li>Staff supervision</li>
            <li>Performance evaluation and monitoring services</li>
            <li>Reporting of incidents and weekly reports</li>
            <li>Preparation of monthly management reports</li>
            <li>Contingency / emergency control procedure</li>
          </ul>
        </div>

        <p className="text-lg text-foregroundMuted leading-relaxed mt-8">
          In order to comply with our clients’ service level agreements, the
          company always appoints a site manager and competent supervisors
          responsible for all tasks and duties to be performed on-site to meet
          clients’ satisfaction. The site manager must be fully familiar with
          the terms and conditions of each site.
        </p>
      </Container>
      <Services />
    </>
  );
}
