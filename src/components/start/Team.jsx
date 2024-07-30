import SectionTitle from "../global/SectionTitle";
import TeamContainer from "./TeamContainer";

const teamMembers = [
  {
    name: "Anna Müller",
    role: "Friseurin",
    image: "https://pin.it/UJpOJwzvm",
  },
  {
    name: "Ben Schneider",
    role: "Stylist",
    image: "https://pin.it/UJpOJwzvm",
  },
  {
    name: "Clara Fischer",
    role: "Coloristin",
    image: "https://pin.it/UJpOJwzvm",
  },
];

function Team() {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto px-4">
        <SectionTitle text="Unser Team" />
        <TeamContainer teamMembers={teamMembers} />
      </div>
    </div>
  );
}

export default Team;
