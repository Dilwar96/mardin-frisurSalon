import hero1 from "../../assets/salon1.jpg";
import hero2 from "../../assets/salon2.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [hero1, hero2];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {" "}
      <Slider {...settings}>
        <div>
          <img
            src={hero1}
            alt="Innenansicht des Barbier-Salons"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src={hero2}
            alt="Vorher-Nachher-Frisur"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/path/to/image3.jpg"
            alt="Detailansicht der Friseurwerkzeuge"
            className="w-full h-full object-cover"
          />
        </div>
      </Slider>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-yellow-500 text-4xl font-bold mb-2">
          Willkommen bei unserem Friseursalon
        </h1>
        <p className="text-yellow-500 text-xl mb-4">
          Dein perfekter Look, unser Handwerk
        </p>
        <Link to="/services" className="btn btn-warning">
          UNSERE LEISTUNGEN
        </Link>
      </div>
    </div>
  );
};

export default Hero;
