- setup vite project

npm create vite@latest mardin-FriseurSalon -- --template react

- add tailwind
  [Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

- rename to tailwind.config.cjs
- add following content

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- remove App.css
- delete contents of index.css
- delete contents of App.jsx
- change title

- Add the Tailwind directives to CSS index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [DaisyUI](https://daisyui.com/)

- add and configure daisyui to project
- add TailwindCSS Typography plugin

npm i -D daisyui@latest @tailwindcss/typography

## Install All Libraries

npm i react-icons@4.10.1 react-router-dom@6.14.2 react-toastify@9.1.3

- create pages directory
- create all pages and export from index.js
- Error, HomeLayout,Contact,Services,Start
- import in app.jsx

pages/index.js
export { default as HomeLayout } from "./HomeLayout";
export { default as Contact } from "./Contact";
export { default as Services } from "./Services";
export { default as Error } from "./Error";
export { default as Start } from "./Start";

App.jsx
import {
HomeLayout,
Landing,
Error,
Products,
SingleProduct,
Cart,
About,
Register,
Login,
Checkout,
Orders,
} from './pages';

- configure react router
- setup initial route structure

App.jsx
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

```js
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span>Barbar</span>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
```

complete the Error page

### Error.jsx

1. Import Dependencies:

   - Import the necessary modules `useRouteError` and `Link` from the 'react-router-dom' library.

2. Create Error Component:

   - Define a functional component named `Error`.
   - Inside the component, use the `useRouteError` hook to get information about the route error.
   - Check the status of the error using `error.status`.

3. Conditional Rendering for 404 Error:

   - If the error status is 404, render a `main` element with a grid layout and centered content.
   - Display a large "404" text, a title "Page not found," and a description.
   - Include a link back to the home page using the `Link` component.

4. Conditional Rendering for Other Errors:

   - If the error status is not 404, render a `main` element with a grid layout and centered content.
   - Display a text message indicating that there was an error.

5. Export Error Component:
   - Export the `Error` component as the default export of the module.

```js
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404)
    return (
      <main className="grid min-h-[100vh] bg-accent-content place-items-center px-8 ">
        <div className="text-center">
          <p className="text-9xl font-semibold text-warning">404</p>
          <h1 className="mt-4 text-3xl font-bold text-base-100 tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg text-base-100 leading-7 ">
            Es tut uns leid, wir konnten die von Ihnen gesuchte Seite nicht
            finden.
          </p>
          <p className="mt-6 text-lg text-base-100 leading-7 ">
            Bitte überprüfen Sie die URL oder kehren Sie zur Startseite zurück.
          </p>
          <div className="mt-10 ">
            <Link to="/" className="btn btn-warning">
              zurück Startseite
            </Link>
          </div>
        </div>
      </main>
    );

  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};

export default Error;
```

- create NavLinks in components\global
- setup an array of links
- iterate over and setup return

```js
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "services", text: "leistungen" },
  { id: 3, url: "contact", text: "kontakt" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className="capitalize text-yellow-500 text-lg" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
```

- create components\global/Navbar.jsx
- setup initial structure
- use Daisy navbar component
- "# responsive (dropdown menu on small screen, right menu on large screen)"
- import icons from react-icons
- render in HomeLayout.jsx

```js
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import log from "../../assets/log.png";

const Navbar = () => {
  return (
    <nav className="bg-accent-content">
      <div className="navbar container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={log} alt="Logo" className="w-20 object-cover" />
        </NavLink>

        <div className="hidden lg:block">
          <ul className="menu menu-horizontal space-x-4">
            <NavLinks />
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost m-1">
            <FaBarsStaggered className="h-6 w-6 text-yellow-500" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 shadow bg-base-200 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- create components\global/IconsContainer.jsx
- This component displays clickable social media icons.
- Each icon links to a specific social media profile and opens in a new tab.
- import icons from react-icons

```js
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
```

- create components\global/Footer.jsx
- This component provides a structured display of contact information, business hours, and social media links at the bottom of a webpage.
- It uses a subcomponent, IconsContainer, to handle the display of social media icons.

```js
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
```

- Hero Component:
  - Define the `Hero` component.
    - Create an array `carouselImages` containing imported image paths.
    - Return a `div` with classes `grid`, `grid-cols-1`, `lg:grid-cols-2`, `gap-24`, and `items-center`.
      - Inside this `div`, another `div`.
        - Inside this `div`, an `h1` with classes `max-w-2xl`, `text-4xl`, `font-bold`, and `tracking-tight`, containing the text "We’re changing the way people shop."
        - Next, a `p` element with classes `mt-8`, `max-w-xl`, `text-lg`, and `leading-8`, containing sample Lorem ipsum text.
        - Following that, a `div` with class `mt-10`.
          - Inside the `div`, a `Link` component with props `to='products'` and classes `btn` and `btn-primary`, containing the text "Our Products".
      - Another `div` with classes `hidden`, `h-[28rem]`, `lg:carousel`, `carousel-center`, `p-4`, `space-x-4`, `bg-neutral`, and `rounded-box`.
        - Inside this `div`, a JavaScript map function iterating over `carouselImages`.
          - For each image, a `div` with class `carousel-item`.
            - Inside the `div`, an `img` element with attributes `src` set to the image path and classes `rounded-box`, `h-full`, `w-80`, and `object-cover`.

```js
import hero1 from "../../assets/salon1.jpg";
import hero2 from "../../assets/salon2.jpg";
import { Link } from "react-router-dom";

const carouselImages = [hero1, hero2];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center bg-black py-5 ">
      <div className="ml-8 lg:ml-40">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-yellow-500">
          Willkommen im unserem Friseursalon
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-yellow-500">
          Dein perfekter Look, unser Handwerk
        </p>
        <div className="mt-10">
          <Link to="/leistungen" className="btn btn-warning">
            UNSERE LEISTUNGEN
          </Link>
        </div>
      </div>
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-accent-content rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
```

-TeamContainer Component:
dynamically renders a grid of team member profiles.
Each profile includes an image, name, and role, suitable for displaying team information on a page.

```js
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
```

Team Component:
utilizes subcomponents to present team information in a clean and structured layout

```js
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
```

FeedbackContainer Component:

- npm i react-slick slick-carousel
- displays testimonials in a carousel format using the Slider component from react-slick.
- Each testimonial is shown with its feedback text and a fixed five-star rating.

```js
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
```

SliderKunden Component:

- presents customer testimonials in a carousel format on a page.
- It uses SectionTitle for headings and FeedbackContainer for displaying individual testimonials.

```js
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
```
