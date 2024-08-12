import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Error, Services, Start, LocationsPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "location",
        element: <LocationsPage />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
