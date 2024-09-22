import { MdSecurity } from "react-icons/md";
import { DetailPage } from "../components";

export default function ContactPage() {
  return (
    <DetailPage
      title="Security Escort"
      imageUrl="s5.jpg"
      icon={<MdSecurity className="text-secondary text-5xl" />}
      reverse
    >
      <p>
        Static guarding and access control is one of our expert fields. We can
        provide round the clock security for your premises, office buildings,
        industrial estates/factories, hospitals, educational institutions,
        embassies, and private residences.
      </p>
      <p>
        Providing security to high-profile special events through manned
        security, access control, electronic checking, and rapid response in
        case of any security breach is another area of our expertise in security
        services.
      </p>
      <p>
        We also provide mobile escorts to cater to the security needs of our
        customers during the transportation of materials and VIP escorts.
      </p>

      <h6 className="text-primary text-2xl font-bold">Additional Details:</h6>
      <p>
        Our security staff are trained professionals, equipped with the latest
        technology and well-versed in protocols designed to handle various
        security risks and incidents. We prioritize the safety of both people
        and property, and we customize our services based on the specific
        requirements of each client.
      </p>
      <p>
        Our physical security measures are supported by a responsive monitoring
        and control system, ensuring timely detection and intervention to
        safeguard against unauthorized access or threats.
      </p>

      <h4 className="text-primary text-2xl font-bold">Key Features:</h4>
      <ul>
        <li>24/7 security for various facilities</li>
        <li>Specialized security for high-profile events</li>
        <li>Mobile escort and VIP protection services</li>
        <li>Rapid response to any security breaches</li>
        <li>Electronic checking and monitoring systems</li>
      </ul>
    </DetailPage>
  );
}
