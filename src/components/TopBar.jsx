import { Link } from "react-router-dom";
import Container from "./Container";
import SocialBar from "./SocialBar";

export default function TopBar() {
  return (
    <div className="bg-primary text-background py-2 px-4">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs md:text-sm ">
          <Link title="Call us" to="tel:+92518739888">
            Ph: 051-8739888
          </Link>{" "}
          | Office No. 5, Third Floor, Al-Malik Centre, 70-West, Jinnah Avenue,
          Blue Area, Islamabad.
        </p>
        <SocialBar />
      </Container>
    </div>
  );
}
