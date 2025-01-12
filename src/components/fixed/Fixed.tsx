import React from "react";

import "./fixed.scss";
import Header from "../../layout/header/Header";

export default function Fixed() {
  return (
    <div className="fixed">
      <div className="fixed__header">
        <Header />
      </div>
    </div>
  );
}
