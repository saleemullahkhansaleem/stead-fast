import { MdSecurity } from "react-icons/md";
import Container from "../Container";
import Button from "../Button";

export default function MainSection() {
  return (
    <section className="py-16">
      <MainSectionBoxes
        title="Physical Security"
        imageUrl="s1.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
      >
        Static guarding and access control is one of our expert fields. We can
        provide round the clock security for your premises, office buildings,
        industrial estates/factories, hospitals, educational institutions,
        embassies, and private residences.
        <br />
        <br />
        Providing security to high profile special events through manned
        security, access control, electronic checking and rapid response in case
        of any security breach is another area of our expertise in security
        services.
        <br />
        <br />
        We also provide mobile escorts to cater for security needs of our
        customer during transportation of materials and VIP escorts.
      </MainSectionBoxes>
      <MainSectionBoxes
        title="High Profile Special Events"
        imageUrl="s3.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        reverse
      >
        Static guarding and access control is one of our expert fields. We can
        provide round the clock security for your premises, office buildings,
        industrial estates/factories, hospitals, educational institutions,
        embassies, and private residences.
        <br />
        <br />
        Providing security to high profile special events through manned
        security, access control, electronic checking and rapid response in case
        of any security breach is another area of our expertise in security
        services.
        <br />
        <br />
        We also provide mobile escorts to cater for security needs of our
        customer during transportation of materials and VIP escorts.
      </MainSectionBoxes>
      <MainSectionBoxes
        title="Security Escort"
        imageUrl="s5.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
      >
        Static guarding and access control is one of our expert fields. We can
        provide round the clock security for your premises, office buildings,
        industrial estates/factories, hospitals, educational institutions,
        embassies, and private residences.
        <br />
        <br />
        Providing security to high profile special events through manned
        security, access control, electronic checking and rapid response in case
        of any security breach is another area of our expertise in security
        services.
        <br />
        <br />
        We also provide mobile escorts to cater for security needs of our
        customer during transportation of materials and VIP escorts.
      </MainSectionBoxes>
      <MainSectionBoxes
        title="Training & Courses"
        imageUrl="s1.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        reverse
      >
        Static guarding and access control is one of our expert fields. We can
        provide round the clock security for your premises, office buildings,
        industrial estates/factories, hospitals, educational institutions,
        embassies, and private residences.
        <br />
        <br />
        Providing security to high profile special events through manned
        security, access control, electronic checking and rapid response in case
        of any security breach is another area of our expertise in security
        services.
        <br />
        <br />
        We also provide mobile escorts to cater for security needs of our
        customer during transportation of materials and VIP escorts.
      </MainSectionBoxes>
    </section>
  );
}

function MainSectionBoxes({
  children,
  title = "",
  icon,
  imageUrl = "",
  reverse = false,
}) {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className={`flex flex-col gap-8 justify-center p-4 md:p-16 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div className="flex items-center gap-4 font-bold">
          {icon}
          <h2 className="text-primary text-3xl">{title}</h2>
        </div>
        <p className="">{children}</p>
        <div>
          <Button>Read More</Button>
        </div>
      </div>
      <div className="flex items-center justify-center w-[600px] h-[600px] bg-primary rounded-full m-auto">
        <div className="flex items-center justify-center w-[550px] h-[550px] border-[24px] border-secondary rounded-full m-auto">
          <div className="flex items-center justify-center w-[460px] h-[460px] border-[12px] border-backround rounded-full m-auto">
            <div className="w-[420px] h-[420px] flex justify-center items-center overflow-hidden rounded-full border-4 border-backround">
              <img
                className="w-full"
                src={"images/security/" + imageUrl}
                alt="security photo"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
