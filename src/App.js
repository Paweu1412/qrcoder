import React from "react";
import { useEffect, useRef, useState } from "react";

import TextField from "@mui/material/TextField";
import FavoriteIcon from "@mui/icons-material/Favorite";

import QRCode from "qrcode";

import "./App.css";

export function Title() {
  return (
    <div className="header--title">
      <center>
        <h1>QR Code Generator</h1>
        <h2>
          Made with{" "}
          <FavoriteIcon className="icon--heartbeat" style={{ color: "red" }} />{" "}
          by Paweł Sumara
        </h2>
      </center>
    </div>
  );
}

function Input(props) {
  return (
    <div className="main--input-area">
      <TextField
        label="Type something here"
        id="filled-hidden-label-small"
        defaultValue=""
        variant="filled"
        size="small"
        sx={{
          label: { color: "rgb(255 255 255 / 80%)" },
          input: { color: "white" },
        }}
        style={{ width: 300 }}
        onChange={(e) => props.typedText(e.target.value)}
        inputProps={{ maxLength: 400 }}
      />
    </div>
  );
}

export function Generator() {
  const [text, setText] = useState("");
  const canvasRef = useRef();

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      text || " ",
      (error) => error && console.log(error)
    );
  }, [text]);

  return (
    <div>
      <div className="main--qrcode-area">
        <canvas ref={canvasRef} />
      </div>

      <div>
        <Input typedText={setText} />
      </div>
    </div>
  );
}
