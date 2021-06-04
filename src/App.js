import React from "react";
import "./App.css";
import Route from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
