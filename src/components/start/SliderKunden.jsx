import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../global/SectionTitle";
import FeedbackContainer from "./FeedbackContainer";

const testimonials = [
  {
    //    name: "Daniel Czarnecki",
    feedback:
      "Der neue Laden ist schön geworden. Alle Mitarbeiter sind mega freundlich und sind sehr bemüht. Der Haarschnitt ist genial. Der Besuch lohnt sich.       ",
  },
  {
    //    name: "Sina Müller",
    feedback:
      "Wir waren sehr zufrieden. Die Schnitte meiner Mutter und mir gingen schnell und es ist genau so, wie wir uns das vorgestellt haben. Sehr freundliche Mitarbeiter/-innen und sehr günstig. Danke!",
  },
  {
    //    name: "Viktoria",
    feedback:
      "Super Personal und sehr freundlich. Gutes Preis- und Leistungsverhältnis",
  },
];

const SliderKunden = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 py-10 max-w-3xl">
        <SectionTitle text="Unsere Kunden" />
        <FeedbackContainer testimonials={testimonials} />
      </div>
    </div>
  );
};

export default SliderKunden;
