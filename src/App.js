import React, { useState } from "react";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      {/* ... etc. */}
    </Route>
  )
);


function App() {

  return (
    <div>
      
        
        <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
