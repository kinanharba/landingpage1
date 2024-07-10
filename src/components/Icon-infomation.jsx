import React from "react";
import { useState } from "react";
import SecurityIcon from "./Bilder/Security-Icon.gif";
import Service from "./Bilder/24Service.gif";
import Setting from "./Bilder/Setting.gif";
import Partnership from "./Bilder/Partnership.gif";
import Info from "./Bilder/Info.gif";
import background from "../background.png";
import { FaCheck } from "react-icons/fa";
import logo from "./Bilder/POS-Cach.png";

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
          <img class="img" src={background} alt="" />
          <div className="infomation-product">
            <div>
              {" "}
              <FaCheck style={{ color: "#3c82f6" }} />
              <span>Externer Barcodescanner</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Zusätzlich integriertes 10 Kundendisplay</span>
            </div>

            <div>
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Integrierter Drucker mit automatischem Bonschnitt</span>
            </div>

            <div>
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Mobiles/ stationäres Premium Payment-Terminal</span>
            </div>

            <div>
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Erweiterbar durch paytec Zusatzmodule</span>
            </div>

            <div>
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Hinterlegung von bis zu 5.000 Artikeln</span>
            </div>
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
          <img class="img" src={background} alt="" />
          <div className="infomation-product-1">
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Detaillierte Berichterstattung inkl. Rechnungsarchiv</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Simple Ziehung von Z- und X- Berichten</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Einfache Stornofunktion</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>
                Fernzugriff auf die Kassendaten durch Deinen Cloud Zugang
              </span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Sichere Kassenführung durch rechtskonforme TSE</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>
                Erfüllt alle GoBD- und KassenSichV-Anforderungen fü Ihr
                rechtskonformes Geschäft
              </span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Daten-Export / Import im CSV-/ Excel-Format</span>
            </div>
          </div>
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
          <img class="img" src={background} alt="" />
          <p style={{ color: "black" }}>
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
          <img class="img" src={background} alt="" />
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

      {/* 
      








• 
รบกล


0,00 -

      
      */}
      {selectedImg === 4 && open === true ? (
        <div class="info-box-card-1">
          <img class="img-1" src={background} alt="" />

          <img class="pay-img-cach" src={logo} alt="" />
          <div className="infomation-product-4">
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Externer Barcodescanner</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>
                24/7 Telefonsupport per E-Mail & Telefon durch ausgebildete
                Techniker
              </span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Integrierter Drucker mit automatischen Bonschnitt</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Erweiterbar durch paytec Zusatzmodule</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>
                Erfüllt alle GoBD- und KassenSichV-Anforderungen für Ihr
                rechtskonformes Geschäft
              </span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>
                Fernzugriff auf die Kassendaten durch deinen Cloud Zugang
              </span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Simple Ziehung von Z- und X- Berichten</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Einfache Stornofunktion</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Sichere Kassenführung durch rechtskonforme TSE</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Detaillierte Berichterstattung inkl. Rechnungsarchiv</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Hinterlegung von bis zu 5.000 Artikeln</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Daten-Export / Import im CSV-/ Excel-Format</span>
            </div>
            <div>
              {" "}
              <span>
                <FaCheck style={{ color: "#3c82f6" }} />
              </span>
              <span>Zusätzlich integriertes 10" Kundendisplay</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default IconInfomation;
