import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menueToggle, setMenueToggle] = useState(false);
  const navLinks = [
    { name: "HOME", url: "/" },
    { name: "WHO WE ARE", url: "/about-us" },
    { name: "WHY STEAD FAST", url: "/why-stand-fast" },
    { name: "HEDONISTIC APPROACH", url: "/hedonistic-approach" },
    { name: "WHAT WE DO", url: "/what-we-do" },
    { name: "CONTACT US", url: "/contact-us" },
    { name: "NEWS", url: "/news" },
    { name: "CAREER", url: "/career" },
  ];

  return (
    <header className="bg-background p-2 shadow sticky top-0 z-10">
      <Container className="flex justify-between items-center">
        {/* <Link href="/" className="flex items-center gap-4">
          <img
            src="images/logo.png"
            alt="SteadFast Logo"
            title="Home"
            className="h-12 md:h-16"
          />
        </Link> */}

        <NavbarBrand />

        <nav className="xl:flex items-center h-full hidden">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `px-3 py-2 hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground"
                }`
              }
              to={link.url}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="p-2 block xl:hidden"
          onClick={() => setMenueToggle(true)}
        >
          <FaBars size={24} />
        </button>
      </Container>
      <div
        className={`${
          menueToggle ? "flex" : "hidden"
        } fixed top-0 left-0 w-full h-screen z-20 xl:hidden`}
      >
        <div
          className="flex-1 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenueToggle(false)}
        ></div>
        <div className="w-60 h-screen overflow-auto shadow bg-background">
          <div className="flex justify-between p-4 text-primary">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              type="button"
              className="hover:text-secondary"
              onClick={() => setMenueToggle(false)}
            >
              <FaTimes size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `px-4 py-2 hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
                to={link.url}
                onClick={() => setMenueToggle(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavbarBrand() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src="/images/logo-small.png" alt="SteadFast Logo" className="h-16" />

      <div>
        <h2 className="block text-primary text-2xl leading-none">STEAD FAST</h2>
        <p className="block text-foregroundMuted text-sm tracking-[10px] text-center">
          SECURITY
        </p>
      </div>
    </Link>
  );
}
