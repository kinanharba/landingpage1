import React from "react";
import FirstKasseLogo from "./Bilder/FirstKasseLogo.png";
import TabletKasse from "./Bilder/KasseTablet.png";
import PosCach from "./Bilder/POS-Cach.png";

function KasseLogo() {
  return (
    <section class="header">
      <div class="kasse-logos">
        <img style={{ width: "35rem" }} src={FirstKasseLogo} alt="" />
        <img class="tablet" src={TabletKasse} alt="" />
      </div>
      <div className="kasse-vorstellen">
        <img style={{ width: "35rem" }} src={PosCach} alt="" />
        <h1 style={{ fontWeight: "400", fontFamily: "sans-serif" }}>
          10” high-resolution display and a built-in <br /> printer make a
          mobile and desktop terminal.
        </h1>
      </div>
    </section>
  );
}

export default KasseLogo;
