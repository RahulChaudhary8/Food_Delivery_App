import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p className="pforbetter">
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <a
          href="https://650ac10f18794a302356ccc6--loquacious-travesseiro-2cd842.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.play_store} alt="Play Store (Portfolio)" />
        </a>

        <a
          href="https://github.com/RahulChaudhary8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={assets.app_store} alt="App Store (GitHub)" />
        </a>
      </div>
    </div>
  );
};

export default AppDownload;
