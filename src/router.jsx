import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/home/Home";
import About from "./pages/about/About";


export const navigationLinks = {

    home: "/",
    about: "about",
    aboutDetails: "about/:id"

}

export const router = createBrowserRouter([
  {
    path: navigationLinks.home,
    element: <App />,
    children: [
      {
       path: navigationLinks.home, 
       element: <Home />
      },
      {
        path: navigationLinks.about,
        element: <About /> 
      }
    ]
  },
]);


