import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./css/styles.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import { About, Contact, Home } from "./pages";
import CTA from "./components/CTA";
import Pricing from "./pages/Pricing";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Dashboard = () => (
  <>
    <Navbar />
    <Outlet />
    <CTA />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
