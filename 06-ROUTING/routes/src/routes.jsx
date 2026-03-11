import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export const routes =  [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact/>
    }
];