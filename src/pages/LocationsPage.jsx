import LocationsContainer from "../components/contact/LocationsContainer";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

const location = {
  id: 1,
  name: "Mardin Friseur Salon Itzehoe",
  address: "lübscherkamp 2-6, 25524 Itzehoe",
  phone: "04821 8879207",
  hours: "Mo-Fr: 9-18 Uhr, Sa: 9-14 Uhr",
  lat: 53.908313,
  lng: 9.483062,
};

const LoactionsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Unsere Standort
          </h1>
          <LocationsContainer location={location} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoactionsPage;
