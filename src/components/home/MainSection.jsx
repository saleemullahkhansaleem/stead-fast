import { MdSecurity } from "react-icons/md";
import Container from "../Container";
import Button from "../Button";

export default function MainSection() {
  return (
    <section className="py-4 lg:py-16">
      <MainSectionBoxes
        title="Physical Security"
        imageUrl="s1.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
        reverse
      >
        <p>
          Static guarding and access control is one of our expert fields. We can
          provide round the clock security for your premises, office buildings,
          industrial estates/factories, hospitals, educational institutions,
          embassies, and private residences.
          <br />
          <br />
          Providing security to high profile special events through manned
          security, access control, electronic checking and rapid response in
          case of any security breach is another area of our expertise in
          security services.
          <br />
          <br />
          We also provide mobile escorts to cater for security needs of our
          customer during transportation of materials and VIP escorts.
        </p>
      </MainSectionBoxes>
      <MainSectionBoxes
        title="High Profile Special Events"
        imageUrl="s3.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
      >
        <p>
          Static guarding and access control is one of our expert fields. We can
          provide round the clock security for your premises, office buildings,
          industrial estates/factories, hospitals, educational institutions,
          embassies, and private residences.
          <br />
          <br />
          Providing security to high profile special events through manned
          security, access control, electronic checking and rapid response in
          case of any security breach is another area of our expertise in
          security services.
        </p>
        <br />
        <br />
        We also provide mobile escorts to cater for security needs of our
        customer during transportation of materials and VIP escorts.
      </MainSectionBoxes>
      <MainSectionBoxes
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
          <br />
          <br />
          Providing security to high profile special events through manned
          security, access control, electronic checking and rapid response in
          case of any security breach is another area of our expertise in
          security services.
          <br />
          <br />
          We also provide mobile escorts to cater for security needs of our
          customer during transportation of materials and VIP escorts.
        </p>
      </MainSectionBoxes>
      <MainSectionBoxes
        title="Training & Courses"
        imageUrl="s1.jpg"
        icon={<MdSecurity className="text-secondary text-5xl" />}
      >
        <p>
          Static guarding and access control is one of our expert fields. We can
          provide round the clock security for your premises, office buildings,
          industrial estates/factories, hospitals, educational institutions,
          embassies, and private residences.
          <br />
          <br />
          Providing security to high profile special events through manned
          security, access control, electronic checking and rapid response in
          case of any security breach is another area of our expertise in
          security services.
          <br />
          <br />
          We also provide mobile escorts to cater for security needs of our
          customer during transportation of materials and VIP escorts.
        </p>
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
    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
      <div
        className={`${
          reverse ? "lg:order-2" : ""
        } flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-primary rounded-full m-auto overflow-hidden`}
      >
        <div className="flex items-center justify-center w-[92%] h-[92%] border-[24px] border-secondary border-b-transparent rotate-45 rounded-full m-auto">
          <div className="flex items-center justify-center w-[92%] h-[92%] border-[12px] border-backround border-t-transparent rounded-full m-auto">
            <div className="w-[95%] h-[95%] flex justify-center items-center overflow-hidden rounded-full border-2 -rotate-45 border-backround">
              <img
                className="min-w-full w-auto"
                src={"images/security/" + imageUrl}
                alt="security photo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-8 justify-center p-4 lg:p-12`}>
        <div className="flex items-center gap-4 font-bold">
          {icon}
          <h2 className="text-primary text-3xl">{title}</h2>
        </div>
        {children}
        <div>
          <Button>Read More</Button>
        </div>
      </div>
    </Container>
  );
}
