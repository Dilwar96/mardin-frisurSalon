import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const url = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=61560830247249",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mardinfriseursalon?igsh=MXVsOTI5bTNkbHU1eA==",
  },
  {
    id: 3,
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@mardin.friseur?_t=8n5KXm9vBvV&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAabzpb-vnDgi-0K3hKkWDKh_u6Sh-IoY1ljrvV2x0aBQOis-9Ku3Ju1WFy0_aem_f6u3NWAKh0g2DbqR4WCZNA",
  },
];

const IconsContainer = () => {
  return (
    <div className="mb-6 md:mb-0">
      <h4 className="text-xl font-bold mb-2 text-yellow-500">Folgen Sie uns</h4>

      <div className="flex space-x-4 mt-5">
        {url.map((link) => {
          const { id, icon, url } = link;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              className="hover:text-gray-400 text-2xl"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default IconsContainer;
