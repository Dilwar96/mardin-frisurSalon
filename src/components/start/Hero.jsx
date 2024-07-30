import hero1 from "../../assets/salon1.jpg";
import hero2 from "../../assets/salon2.jpg";
import { Link } from "react-router-dom";

const carouselImages = [hero1, hero2];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center bg-black py-5 ">
      <div className="ml-8 lg:ml-40">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
          Willkommen im unserem Friseursalon
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-yellow-500">
          Dein perfekter Look, unser Handwerk
        </p>
        <div className="mt-10">
          <Link to="/services" className="btn btn-warning">
            UNSERE LEISTUNGEN
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-accent-content rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
