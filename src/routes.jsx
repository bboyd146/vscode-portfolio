import { createHashRouter } from "react-router-dom";
import WorkspaceLayout from "./layouts/WorkspaceLayout";
import SimpleLayout from "./layouts/SimpleLayout";

import StartHere from "./pages/StartHere";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

import AiReceptionist from "./pages/projects/AiReceptionist";
import LeadFollowup from "./pages/projects/LeadFollowup";
import PixelPioneer from "./pages/projects/PixelPioneer";
import SimpleCacheSimulator from "./pages/projects/SimpleCacheSimulator";
import CompanyDatabase from "./pages/projects/CompanyDatabase";

export const router = createHashRouter([
  {
    element: <WorkspaceLayout />,
    children: [
      { path: "/", element: <StartHere /> },
      { path: "/about", element: <About /> },
      { path: "/experience", element: <Experience /> },
      { path: "/skills", element: <Skills /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects/ai-receptionist", element: <AiReceptionist /> },
      { path: "/projects/lead-followup", element: <LeadFollowup /> },
      { path: "/projects/company-database", element: <CompanyDatabase /> },
      { path: "/projects/simple-cache-simulator", element: <SimpleCacheSimulator /> },
      { path: "/projects/pixelpioneer", element: <PixelPioneer /> },
    ],
  },

  // Optional: you can also mount SimpleLayout as a separate route base if you want,
  // but easiest is a responsive toggle inside WorkspaceLayout.
]);
