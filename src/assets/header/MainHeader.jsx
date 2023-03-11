import React from "react";
import { useState } from "react";

const MainHeader = () => {
  const [resp, setResp] = useState("h-0px");
  return (
    <header>
      <div className="logo">Pandingas</div>
      <nav className={`navbar active ${resp}`}>
        <ul className="">
        <li>
            <a href="/PANDINGA">Inicio</a>
          </li>
          <li>
            <a href="/PANDINGA/Menu">Menu</a>
          </li>
          <li>
            <a href="/PANDINGA/Reservacion">Reservacion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
