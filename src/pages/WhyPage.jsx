import { MdSecurity } from "react-icons/md";
import { DetailPage } from "../components";

export default function WhyPage() {
  return (
    <DetailPage
      title="WHY CHOOSE US"
      description="Your Trusted Security Partner."
      imageUrl="placeholder.jpg"
      icon={<MdSecurity className="text-secondary text-5xl" />}
      reverse
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Stead Fast Security
      </h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        At Stead Fast Security, we offer exceptional security services to ensure
        the safety and protection of our clients, their assets, and the
        community.
      </p>

      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">We Offer:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Experienced and trained personnel</li>
            <li>State-of-the-art equipment and technology</li>
            <li>Customized security solutions</li>
            <li>24/7 emergency response</li>
            <li>Competitive pricing</li>
            <li>Unwavering commitment to excellence</li>
          </ul>
        </div>

        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">OBJECTIVE:</h6>
          <p className="text-foregroundMuted">
            Securing Your World. Our primary objective is to provide effective
            security solutions that safeguard our clients' interests, minimize
            risks, and ensure a secure environment for business and daily life.
            We aim to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Protect people, property, and assets</li>
            <li>Prevent security breaches and incidents</li>
            <li>Respond promptly to emergencies</li>
            <li>Provide peace of mind through exceptional service</li>
          </ul>
        </div>

        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">HOW WE OPERATE:</h6>
          <p className="text-foregroundMuted">
            Operational Excellence. We ensure operational excellence through:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Rigorous recruitment and selection process</li>
            <li>Comprehensive training and development programs</li>
            <li>Proven operational protocols and procedures</li>
            <li>Regular quality control and assurance measures</li>
            <li>Open communication and feedback mechanisms</li>
          </ul>
        </div>

        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">TRAINING:</h6>
          <p className="text-foregroundMuted">
            Empowering Our Teams. Our training programs include:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Basic training (first aid, firefighting, etc.)</li>
            <li>
              Advanced training (tactical response, crisis management, etc.)
            </li>
            <li>
              Specialized training (high-risk security, event management, etc.)
            </li>
            <li>Continuous professional development</li>
            <li>Scenario-based training</li>
          </ul>
        </div>

        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">
            SPECIALIZED TRAINING:
          </h6>
          <p className="text-foregroundMuted">
            Expertise in High-Risk Security. Our specialized training programs
            cover:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>High-risk security operations</li>
            <li>Executive protection</li>
            <li>Event security management</li>
            <li>Counter-terrorism and surveillance</li>
            <li>Tactical response and crisis management</li>
          </ul>
        </div>
      </div>
    </DetailPage>
  );
}
