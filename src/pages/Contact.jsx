import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Kontaktieren Sie uns
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/**          <div className="h-full bg-white p-6 rounded-lg shadow-lg">
            <MapSalon />
          </div> */}
          <div className="bg-white p-6 rounded-lg shadow-lg ">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
