import React from "react";
import ReactDOM from "react-dom/client";

import FavoriteIcon from "@mui/icons-material/Favorite";

import "./background.css";
import "./index.css";

import { Generator } from "./App";

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
        <div className="header--title">
          <center>
            <h1>QR Code Generator</h1>
            <h2>
              Made with{" "}
              <FavoriteIcon
                className="icon--heartbeat"
                style={{ color: "red" }}
              />{" "}
              by Paweł Sumara
            </h2>
          </center>
        </div>
      </header>

      <main>
        <Generator />
      </main>
    </div>
  </React.StrictMode>
);
