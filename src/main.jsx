import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage/HomePage';
import Timeline from './Pages/HomePage/TimelinePage/Timeline';
import State from './Pages/HomePage/StatePage/State';
import { router } from './Route/Routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)