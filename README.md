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

add NavLinks.jsx, Navbar.jsx and Footer.jsx to components\global\
create index.js for global components

- create NavLinks component
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

- create components/Navbar.jsx
- setup initial structure
- use Daisy navbar component
- "# responsive (dropdown menu on small screen, center menu on large screen)"
- import icons from react-icons
- render in HomeLayout.jsx
