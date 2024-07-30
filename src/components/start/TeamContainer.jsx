const TeamContainer = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-yellow-500"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">{member.name}</h3>
          <p className="text-gray-400">{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamContainer;
