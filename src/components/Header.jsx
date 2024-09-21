import { Link } from "react-router-dom";
import Container from "./Container";

export default function Header() {
  const navLinks = [
    { name: "HOME", url: "/" },
    { name: "WHO WE ARE", url: "/who-we-are" },
    { name: "WHY STEAD FAST", url: "/why-stand-fast" },
    { name: "HEDONISTIC APPROACH", url: "/hedonistic-approach" },
    { name: "WHAT WE DO", url: "/what-we-do" },
    { name: "CONTACT US", url: "/contact-us" },
    { name: "NEWS", url: "/news" },
  ];

  return (
    <header className="bg-background py-2 shadow">
      <Container className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-4">
          <img
            src="images/logo.png"
            alt="SteadFast Logo"
            title="Home"
            className="h-16"
          />
        </Link>
        <nav className="flex items-center h-full">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="px-4 py-2 hover:text-primary"
              to={link.url}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
