import React from "react";
import ReactDOM from "react-dom/client";

import "./background.css";
import "./index.css";

import { Title, Generator } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <div className="container container--background">
      <header>
        <Title />
      </header>

      <main>
        <Generator />
      </main>
    </div>
  </React.StrictMode>
);
