import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/archivo"; // Defaults to 400 weight
import {
  ApproachPage,
  BulletProofVehicles,
  BurglarAlarm,
  Canine,
  CareerApplyPage,
  CareerPage,
  ContactPage,
  Downloads,
  HighProfileEvents,
  Home,
  NewsPage,
  NotFound,
  Organogram,
  PhysicalSecurity,
  SecurityEscort,
  SecuritySystem,
  ServicesLayout,
  TrainingCourses,
  WhatPage,
  WhoPage,
  WhyPage,
} from "./pages";
import CompanyProfile from "./pages/CompanyProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <WhoPage />,
      },
      {
        path: "why-stand-fast",
        element: <WhyPage />,
      },
      {
        path: "hedonistic-approach",
        element: <ApproachPage />,
      },
      {
        path: "what-we-do",
        element: <WhatPage />,
      },
      {
        path: "company-profile",
        element: <CompanyProfile />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "career",
        element: <CareerPage />,
      },
      {
        path: "career-apply",
        element: <CareerApplyPage />,
      },
      {
        path: "organogram",
        element: <Organogram />,
      },
      {
        path: "downloads",
        element: <Downloads />,
      },
      {
        path: "services/",
        element: <ServicesLayout />,
        children: [
          {
            path: "physical-security",
            element: <PhysicalSecurity />,
          },
          {
            path: "high-profile-events",
            element: <HighProfileEvents />,
          },
          {
            path: "security-escort",
            element: <SecurityEscort />,
          },
          {
            path: "training-courses",
            element: <TrainingCourses />,
          },
          {
            path: "bullet-proof-vehicles",
            element: <BulletProofVehicles />,
          },
          {
            path: "burglar-alarm",
            element: <BurglarAlarm />,
          },
          {
            path: "security-system",
            element: <SecuritySystem />,
          },
          {
            path: "canine",
            element: <Canine />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
