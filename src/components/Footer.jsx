import { Link } from "react-router-dom";
import Container from "./Container";
import SocialBar from "./SocialBar";

export default function Footer() {
  const footerNavLinks = [
    [
      { name: "Home", url: "/home" },
      { name: "About Us", url: "/about-us" },
      { name: "Jobs", url: "/jobs" },
      { name: "Security Services", url: "/security-services" },
      { name: "Technical Security", url: "/technical-security" },
      { name: "Cash in Transit", url: "/cash-in-transit" },
    ],
    [
      { name: "Training School", url: "/training-school" },
      { name: "Canine", url: "/canine" },
      { name: "Bulletin", url: "/bulletin" },
      { name: "Contact Us", url: "/contact-us" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Site Map", url: "/site-map" },
    ],
  ];

  return (
    <footer className="bg-foregroundMuted text-backgroundMuted">
      <Container className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12">
        <div className="p-4 xl:px-12">
          <h4 className="text-2xl text-background font-bold pb-4">
            STEAD FAST Security
          </h4>
          <p>
            Stead Fast Security Company (Private) established on 28th January,
            2008 is a leading security solutions provider committed to
            safeguarding businesses, institutions, and communities in ICT,
            Punjab and KP.
          </p>
        </div>
        <div className="p-4">
          <h4 className="text-2xl text-background font-bold pb-4">Menu</h4>
          <div className="grid grid-cols-2">
            {footerNavLinks.map((column, colIndex) => (
              <div className="flex flex-col gap-2" key={colIndex}>
                {column.map((link, index) => (
                  <Link
                    key={index}
                    to={link.url}
                    title={link.name}
                    className="text-lg hover:text-background"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-2xl text-background font-bold pb-4">Contact</h4>
          <p>office#5 Al-Malik Centre (Third Floor)</p>
          <p> 70 West Jinnah Avenue</p>
          <p> Blue Area Islamabad</p>
          <br />
          <p>
            <Link
              title="contact@steadfastsecurity.com.pk"
              to="mailto:contact@steadfastsecurity.com.pk"
              className="text-lg hover:text-background"
            >
              contact@steadfastsecurity.com.pk
            </Link>
          </p>
          <br />
          <p>
            <Link
              className="text-lg hover:text-background"
              title="Call us"
              to="tel:+92512803190"
            >
              Phone: 051-2803190-91
            </Link>
          </p>
        </div>
      </Container>
      <div className="bg-foreground py-2">
        <Container className="flex flex-col md:flex-row gap-4 justify-between items-center flex-wrap">
          <div className="row footer-copyright">
            <div className="col-md-12 text-center">
              <p>
                © 2024 <span className="footer-highlight">STEAD FAST</span> Pvt.
                Ltd All rights reserved.
              </p>
            </div>
          </div>
          <SocialBar />
        </Container>
      </div>
    </footer>
  );
}
