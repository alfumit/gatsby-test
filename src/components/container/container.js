import React from "react";
import containerSyles from "./container.module.css"

export default ({ children }) => (
  <div className={`${containerSyles.host} ${containerSyles.rrr}`}>
    <h1 className={containerSyles.h1}>Lalalal</h1>
    AAA{children}</div>
)
