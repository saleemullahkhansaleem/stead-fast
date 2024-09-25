import { DetailPage } from "../../components";
import { MdSecurity } from "react-icons/md";

export default function BulletProofVehicles() {
  return (
    <DetailPage
      title="Bullet Proof Vehicles"
      description="Discover who we are and what drives us to deliver exceptional security services."
      imageUrl="placeholder.jpg"
      icon={<MdSecurity className="text-secondary text-5xl" />}
      reverse
    >
      <h2 className="text-4xl font-bold mb-6 text-primary">
        Bullet Proof Vehicles
      </h2>
      <p className="text-lg text-foregroundMuted leading-relaxed mb-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        excepturi debitis aliquam fuga vel velit eos magni mollitia nemo atque
        consectetur dolores veritatis molestiae, sequi possimus ea? Accusamus
        sed optio odio maxime accusantium, alias at mollitia deleniti officia
        modi id facilis voluptatem earum dicta illum illo ut enim nam non!
      </p>

      <div className="space-y-8">
        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">VISION:</h6>
          <p className="text-foregroundMuted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, fuga!
            Corporis soluta unde incidunt alias ab expedita maiores, illum
            accusantium nihil animi tempora asperiores recusandae voluptate,
            dignissimos odit beatae quod quos est libero! Nulla perferendis vero
            magni, harum adipisci laboriosam nisi debitis dolores cumque
            praesentium id quas ipsam maxime ut!
          </p>
        </div>

        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h6 className="text-primary text-xl font-bold">MISSION:</h6>
          <p className="text-foregroundMuted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, fuga!
            Corporis soluta unde incidunt alias ab expedita maiores, illum
            accusantium nihil animi tempora asperiores recusandae voluptate,
            dignissimos odit beatae quod quos est libero! Nulla perferendis vero
            magni, harum adipisci laboriosam nisi debitis dolores cumque
            praesentium id quas ipsam maxime ut!
          </p>
        </div>

        <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
          <ul className="list-disc list-inside space-y-2 mt-4 text-foregroundMuted">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
          </ul>
        </div>
      </div>
    </DetailPage>
  );
}
