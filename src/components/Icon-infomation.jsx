import React from "react";
import { useState } from "react";
import SecurityIcon from "./Bilder/Security-Icon.gif";
import Service from "./Bilder/24Service.gif";
import Setting from "./Bilder/Setting.gif";
import Partnership from "./Bilder/Partnership.gif";
import Info from "./Bilder/Info.gif";
import background from "../background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import chek from "./Bilder/chek.png";

/*
Externer Barcodescanner
Zusätzlich integriertes 10 Kundendisplay
Integrierter Drucker mit automatischem Bonschnitt Mobiles/ stationäres Premium Payment-Terminal
Erweiterbar durch paytec Zusatzmodule
Hinterlegung von bis zu 5.000 Artikeln
*/

const InfomationText = [
  "Externer Barcodescanner Zusätzlich integriertes 10 Kundendisplay Integrierter Drucker mit automatischem Bonschnitt Mobiles/ stationäres Premium Payment-Terminal Erweiterbar durch paytec Zusatzmodule Hinterlegung von bis zu 5.000 Artikeln",
];

const Punkt = () => {
  return (
    <div class="punkt-container">
      <div class="punkt"></div>
      <div class="punkt"></div>
      <div class="punkt"></div>
    </div>
  );
};

function IconInfomation() {
  const [selectedImg, setSelecetedImg] = useState(0);
  const [open, setOpen] = useState(false);
  const select = (sel, op) => {
    setSelecetedImg(sel);
    setOpen((op) => !op);
  };
  console.log(selectedImg);
  console.log(open);

  return (
    <section style={{ fontFamily: "sans-serif" }} class="icons-infomation">
      <li class="icon">
        <img
          onClick={() => select(0)}
          style={{ width: "100px" }}
          src={Info}
          alt=""
        />
      </li>
      {selectedImg === 0 && open === true ? (
        <div class="info-box-card">
          <img src={background} alt="" />
          <div className="infomation-product">
            <p>Externer Barcodescanner</p>
            <span>
              <i class="fa-duotone fa-check"></i>
            </span>{" "}
            <p>Zusätzlich integriertes 10 Kundendisplay</p>
            <span>
              <i class="fa-duotone fa-check"></i>
            </span>{" "}
            <p>Integrierter Drucker mit automatischem Bonschnitt</p>
            <span>
              <i class="fa-duotone fa-check"></i>
            </span>{" "}
            <p>Mobiles/ stationäres Premium Payment-Terminal</p>
            <span>
              <i class="fa-duotone fa-check"></i>
            </span>{" "}
            <p>Erweiterbar durch paytec Zusatzmodule</p>
            <span>
              <i class="fa-duotone fa-check"></i>
            </span>{" "}
            <p>Hinterlegung von bis zu 5.000 Artikeln</p>
          </div>
        </div>
      ) : (
        ""
      )}
      <Punkt />

      <li class="icon">
        <img
          onClick={() => select(1)}
          style={{ width: "100px" }}
          src={SecurityIcon}
          alt=""
        />
      </li>
      {selectedImg === 1 && open === true ? (
        <div class="info-box-card">
          <img src={background} alt="" />
          <p>Detaillierte Berichterstattung inkl. Rechnungsarchiv</p>
          <p>Simple Ziehung von Z- und X- Berichten</p>
          <p>Einfache Stornofunktion</p>
          <p>Fernzugriff auf die Kassendaten durch Deinen Cloud Zugang</p>
          <p>Sichere Kassenführung durch rechtskonforme TSE</p>
          <p>
            Erfüllt alle GoBD- und KassenSichV-Anforderungen fü Ihr
            rechtskonformes Geschäft
          </p>
          <p>Daten-Export / Import im CSV-/ Excel-Format</p>
        </div>
      ) : (
        ""
      )}
      <Punkt />

      <li class="icon">
        <img
          onClick={() => select(2)}
          style={{ width: "100px" }}
          src={Service}
          alt=""
        />
      </li>
      {selectedImg === 2 && open === true ? (
        <div style={{ height: "60px" }} class="info-box-card">
          <img src={background} alt="" />
          <p>
            24/7 Telefonsupport per E-Mail & Telefon durch ausgebildete
            Techniker
          </p>
        </div>
      ) : (
        ""
      )}
      <Punkt />

      <li class="icon">
        <img
          onClick={() => select(3)}
          style={{ width: "100px" }}
          src={Setting}
          alt=""
        />
      </li>
      {selectedImg === 3 && open === true ? (
        <div class="info-box-card">
          <img src={background} alt="" />
        </div>
      ) : (
        ""
      )}
      <Punkt />

      <li class="icon">
        <img
          onClick={() => select(4)}
          style={{ width: "100px" }}
          src={Partnership}
          alt=""
        />
      </li>
      {selectedImg === 4 && open === true ? (
        <div class="info-box-card">
          <img src={background} alt="" />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default IconInfomation;
