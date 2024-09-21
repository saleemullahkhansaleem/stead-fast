import Container from "./Container";
import SocialBar from "./SocialBar";

export default function TopBar() {
  return (
    <div className="bg-primary text-background py-2">
      <Container className="flex justify-between items-center max-h-10">
        <p className="text-sm">
          Ph: 051-2803190-91 | Office No. 5, Third Floor, Al-Malik Centre,
          70-West, Jinnah Avenue, Blue Area, Islamabad.
        </p>
        <SocialBar />
      </Container>
    </div>
  );
}
