import ServicesCard from "./ServicesCard";
import { services } from "./services";

const ServicesContainer = () => {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4 text-yellow-500">
        <h2 className="text-3xl font-bold text-center mb-8">
          Unsere Leistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServicesCard services={services.Damen} title="Damen" />
          <div>
            <ServicesCard services={services.Herren} title="Herren" />
            <ServicesCard
              services={services.KomplettpaketHerren}
              title="Komplettpaket Herren"
            />
            <h3 className="text-2xl font-bold mb-4 mt-8">Kinder</h3>
            <ul>
              <li className="py-2 border-b border-gray-700">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">
                    {services.Kinder.service}
                  </span>
                  <span className="w-13">
                    {(services.Kinder.price / 100).toFixed(2)} €
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
