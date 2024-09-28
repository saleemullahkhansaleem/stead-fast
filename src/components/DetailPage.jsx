import Button from "./Button";
import CircleImage from "./CircleImage";
import Container from "./Container";
import CoverSection from "./CoverSection";
import Services from "./home/Services";

export default function DetailPage({
  children,
  title = "",
  description = "",
  imageUrl = "",
  sideImages = [],
}) {
  return (
    <>
      <CoverSection title={title} description={description} />
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-8">
        <CircleImage imageUrl={imageUrl} sideImages={sideImages} />
        <div className={`flex flex-col gap-8 justify-center `}>
          {children}
          <div className="mt-4">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Container>
      <Services />
    </>
  );
}
