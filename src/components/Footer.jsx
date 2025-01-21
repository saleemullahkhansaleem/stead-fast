import { Link } from "react-router-dom";
import Container from "./Container";
import SocialBar from "./SocialBar";
import BackToTopButton from "./BackToTopButton";
import CallUsButton from "./CallUsButton";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  const footerNavLinks = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us" },
    { name: "Why Choose Us", url: "/why-stand-fast" },
    { name: "Security Services", url: "/what-we-do" },
    { name: "Latest News", url: "/news" },
    { name: "Jobs", url: "/career" },
    { name: "Downloads", url: "/downloads" },
    { name: "Contact Us", url: "/contact-us" },
  ];

  const importantLinks = [
    { name: "Ministry of Interior", url: "https://www.interior.gov.pk/" },
    { name: "ICT Administration", url: "https://ictadministration.gov.pk/" },
    { name: "Punjab Home Department", url: "https://www.home.gop.pk/" },
    { name: "Directorate of Monitoring Punjab", url: "http://dm-hd.gop.pk/#" },
    { name: "KP Home Department", url: "https://hd.kp.gov.pk/" },
    { name: "Sindh Home Department", url: "https://home.sindh.gov.pk/" },
    {
      name: "Balochistan Home Department",
      url: "https://homedept.balochistan.gob.pk/",
    },
    { name: "GB Home Department", url: "https://gilgitbaltistan.gov.pk/" },
    { name: "AJ&K Home Department", url: "https://ajk.gov.pk/" },
  ];

  return (
    <footer className="bg-foregroundMuted text-backgroundMuted pb-14 md:pb-0 text-justify">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12">
        <div className="p-4 xl:px-12">
          <h4 className="text-xl text-background font-bold pb-4">
            STEAD FAST SECURITY
          </h4>
          <p>
            Stead Fast Security Company (Private) Limmited established on 28th
            January, 2008 is a leading security solutions provider committed to
            safeguarding businesses, institutions, and communities in ICT,
            Punjab and KP.
          </p>
        </div>
        <div className="flex flex-col gap-1 p-4">
          <h4 className="text-xl text-background font-bold pb-4">Menu</h4>
          {footerNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              title={link.name}
              className="hover:text-background hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"
            >
              <FaArrowRightLong />
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1 py-4">
          <h4 className="text-xl text-background font-bold pb-4">
            Important Links
          </h4>
          {importantLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              title={link.name}
              target="_blank"
              className="hover:text-background hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"
            >
              <FaArrowRightLong />
              {link.name}
            </Link>
          ))}
        </div>
        <div className="p-4">
          <h4 className="text-xl text-background font-bold pb-4">Contact</h4>
          <p>Office No: 5 Al-Malik Centre (Third Floor)</p>
          <p> 70 West Jinnah Avenue</p>
          <p> Blue Area Islamabad</p>
          <br />
          <p>
            <Link
              title="contact@steadfastsecurity.com.pk"
              to="mailto:contact@steadfastsecurity.com.pk"
              className="hover:text-background"
            >
              contact@steadfastsecurity.com.pk
            </Link>
          </p>
          <br />
          <p className="flex gap-2">
            <span>Phone:</span>{" "}
            <span>
              <Link
                className="hover:text-background"
                title="Call us"
                to="tel:+92518739888"
              >
                051-8739888
              </Link>
              <br />
              <Link
                className="hover:text-background"
                title="Call us"
                to="tel:+92518736789"
              >
                051-8736789
              </Link>
            </span>
          </p>
        </div>
      </Container>
      <div className="bg-foreground py-2">
        <Container className="flex flex-col md:flex-row gap-4 justify-between items-center flex-wrap">
          <div className="row footer-copyright">
            <div className="col-md-12 text-center">
              <p>
                Developed by{" "}
                <Link
                  target="_blank"
                  className="text-background hover:underline"
                  to={"https://mrsaleem.vercel.app/"}
                >
                  Mr Saleem
                </Link>{" "}
                in{" "}
                <Link
                  target="_blank"
                  className="text-background hover:underline"
                  to={"https://mhstechventures.com/"}
                >
                  MHS Tech Ventures
                </Link>{" "}
                | © 2024{" "}
                <span className="footer-highlight">
                  Stead Fast Security Company
                </span>{" "}
                Pvt. Ltd All rights reserved.
              </p>
            </div>
          </div>
          <SocialBar />
        </Container>
      </div>
      <CallUsButton />
      <BackToTopButton />
    </footer>
  );
}
