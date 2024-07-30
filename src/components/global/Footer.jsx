import IconsContainer from "./IconsContainer";

const Footer = () => {
  return (
    <footer className="bg-accent-content text-white p-6 pt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-yellow-500">Kontakt</h4>
          <p className="text-gray-400">
            Adresse: lübscherkamp 2-6, 25524 Itzehoe
          </p>
          <p className="text-gray-400">Telefon: 04821 8879207</p>
          <p className="text-gray-400">E-Mail: info@friseursalon.de</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-2 text-yellow-500">
            Öffnungszeiten
          </h4>
          <p className="text-gray-400">Mo-Fr: 9-18 Uhr</p>
          <p className="text-gray-400">Sa: 9-14 Uhr</p>
        </div>
        <IconsContainer />
      </div>
      <div className="mt-6 text-center border-t border-gray-700 pt-4">
        <p>© 2024 Mardin FriseurSalon Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
