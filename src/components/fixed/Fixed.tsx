import React from "react";

import "./fixed.scss";
import Header from "../../layout/header/Header";
import Slide from "../slide/Slide";

export default function Fixed() {
  return (
    <div className="fixed">
      <div className="fixed__header">
        <Header />
      </div>
      <div className="fixed__content">
        <Slide/>
      </div>
    </div>
  );
}
