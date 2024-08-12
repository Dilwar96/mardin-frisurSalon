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
    ],
  },
  {
    path: "/services",
    element: <Services />,
    errorElement: <Error />,
  },
  {
    path: "/location",
    element: <LocationsPage />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
