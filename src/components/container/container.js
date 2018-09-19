import React from "react";
import containerSyles from "./container.module.css"

export default ({ children }) => (
  <div className={containerSyles.container}>{children}</div>
)
