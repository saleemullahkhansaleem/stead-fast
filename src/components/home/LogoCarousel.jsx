import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../Container";

const logos = [
  { src: "images/clients/caput.png", title: "CAPUT International" },
  { src: "images/clients/ws.svg", title: "Win Source International" },
  { src: "images/clients/deed.png", title: "Deed" },
  { src: "images/clients/ggr.png", title: "Go For Green Revolution" },
  { src: "images/clients/glt.png", title: "Global Links Technologies" },
  { src: "images/clients/mhs.png", title: "MHS Tech Ventures" },
  { src: "images/clients/cg.png", title: "Creative Garage" },
  { src: "images/clients/fscf.png", title: "FSCF Technologies" },
];

const LogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // XL
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // LG
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // MD
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container className="relative py-4">
      <h1 className="text-3xl text-center py-4 font-bold text-secondary">
        Our Clients
      </h1>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="p-2">
            <img
              src={logo.src}
              alt={logo.title}
              className="object-contain h-24 mx-auto"
            />
            <hr />
            <p className="p-4 text-center font-bold text-xs md:text-base">
              {logo.title}
            </p>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default LogoCarousel;
