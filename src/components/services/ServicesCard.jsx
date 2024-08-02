const ServicesCard = ({ services, title }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4 mt-4">{title}</h3>
      <ul>
        {services.map((item) => (
          <li key={item.id} className="py-2 border-b border-gray-700 mt-2">
            {item.title && (
              <div className="flex justify-between">
                <span className="text-lg font-semibold mt-2">{item.title}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="w-">{item.service}</span>
              <span>{(item.price / 100).toFixed(2)} €</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesCard;
