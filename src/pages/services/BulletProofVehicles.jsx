import { DetailPage } from "../../components";

export default function BulletProofVehicles() {
  return (
    <DetailPage
      title="Bullet Proof Vehicles"
      description="Our bulletproof vehicles offer unparalleled protection, ensuring safe transportation in high-risk environments. Equipped with state-of-the-art security features, these vehicles provide a secure and reliable solution for VIPs, executives, and sensitive cargo in potentially dangerous situations."
      imageUrl="/images/security/placeholder.jpg"
      sideImages={[
        "/images/security/placeholder.jpg",
        "/images/security/placeholder.jpg",
      ]}
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Bullet Proof Vehicles
      </h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        Travel securely in our armored vehicles. Customized solutions for
        individuals, groups, and organizations requiring high-level protection
      </p>

      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            Stead Fast Security” provides armored vehicle solutions, ensuring
            safe transportation for individuals, groups, and organizations
            requiring high-level protection. Our bulletproof vehicles feature:
          </p>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Advanced armor plating and ballistic glass</li>
            <li>Customized interior and exterior designs</li>
            <li>Enhanced security features (GPS, surveillance, etc.)</li>
            <li>Trained chauffeur services</li>
            <li>Maintenance and support programs</li>
          </ul>
        </div>
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold"></h6>
          <p className="text-foregroundMuted">
            Our armored vehicles cater to various needs, including executive
            protection, diplomatic transport, and high-risk transportation. We
            offer tailored solutions, ensuring discretion, comfort, and
            unparalleled security.
          </p>
        </div>
      </div>
    </DetailPage>
  );
}
