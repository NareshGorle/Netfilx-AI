
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn";
import Browser from "./components/Browser";
import Body from "./components/Body";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";


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
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user signin
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/browser")
      } else {
        // User is signed out
        dispatch(removeUser())
        // navigate("/")
      }
    });
  }, [])
  return <RouterProvider router={appRouter} />;
}
