import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Autocomplete from "./components/Autocomplete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <div>
  <BrowserRouter>
    <Routes>
     
        <Route path="/" element={<App />} />
        <Route path="/cypress" element={<Autocomplete />} />
     
    </Routes>
  </BrowserRouter> </div>
);
