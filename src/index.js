import React from "react";
import ReactDOM from "react-dom/client";
import DT from "./debounce-throttle/DT";
import Portals from "./portal/Portals";
import Challenge from "./portal/Challenge";

const LINK_STYLE = {
  display: "inline-block",
  margin: "10px",
};

const isPortal = window.location.pathname.match("portals");
const isDt = window.location.pathname.match("dt");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <a style={LINK_STYLE} href="/dt">
      debounce - throttle
    </a>
    <a style={LINK_STYLE} href="/portals">
      portals
    </a>
    <main style={{ padding: "50px" }}>
      {isPortal ? <Challenge /> : null}
      {isDt ? <DT /> : null}
    </main>
  </>
);
