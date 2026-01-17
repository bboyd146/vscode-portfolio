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
import AiNexus from "./pages/projects/AiNexus";

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
      { path: "/projects/ai-nexus", element: <AiNexus /> },
      { path: "/projects/company-database", element: <CompanyDatabase /> },
      { path: "/projects/simple-cache-simulator", element: <SimpleCacheSimulator /> },
      { path: "/projects/pixelpioneer", element: <PixelPioneer /> },
    ],
  },

]);
