
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn";
import Browser from "./components/Browser";
import Body from "./components/Body";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <LogIn />
      },
      {
        path: "/browser",
        element: <Browser />
      }
    ]
  }
]);

export default function App() {

  return <RouterProvider router={appRouter} />;
}
