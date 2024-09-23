import Button from "./Button";
import Container from "./Container";
import CoverSection from "./CoverSection";
import Services from "./home/Services";

export default function DetailPage({
  children,
  title = "",
  description="",
  icon,
  imageUrl = "",
  reverse = false,
}) {
  return (
    <>
      <CoverSection title={title} description={description} />
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
        <div
          className={`${
            reverse ? "lg:order-2" : ""
          } flex items-center justify-center w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-primary rounded-full mx-auto overflow-hidden`}
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
        <div className={`flex flex-col gap-8 justify-center `}>
          {/* <div className="flex items-center gap-4 font-bold">
            {icon}
            <h2 className="text-primary text-3xl">{title}</h2>
          </div> */}
          {children}
          <div>
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Container>
      <Services />
    </>
  );
}
