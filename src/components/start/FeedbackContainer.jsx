import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

const FeedbackContainer = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };
  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className=" bg-gray-800 p-7 rounded-lg shadow-lg text-center text-white  min-h-[200px]"
          >
            <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
            <div className="flex justify-center">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 w-4 h-4" />
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackContainer;
