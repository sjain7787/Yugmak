import React, { Fragment, useEffect, useRef, useState } from "react";
import "./style/home.css"; // import the CSS file with styles for the caption
import front from "./img/front.png";
import back from "./img/back.png";
import { ReactDOM } from "react";
import Media from "react-media";
import mobile from "./img/Artboard 1.png";

function Home() {
  const bac = React.useRef(null);
  const tex = React.useRef(null);
  const [check, setCheck] = useState(false);

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (tex.current != null) tex.current.style.marginTop = value * 1 + "px";
    if (bac.current != null) bac.current.style.top = value * 0.5 + "px";
  });
  return (
    <>
      <Media query="(max-width:978px)">
        {(matches) => {
          matches ? setCheck(false) : setCheck(true);
        }}
      </Media>
      <Media query="(max-width:978px)">
        {(matches) => {
          return !matches ? (
            <>
              <div>
                <section className="parallax">
                  <img src={back} ref={bac} alt="" id="back1" />
                  <h2 id="text" ref={tex}>
                    YUGMAK
                  </h2>
                  <img src={front} alt="" id="front1" />
                </section>
              </div>
            </>
          ) : (
            <>
              <div className="con">
                <h2 id="text">YUGMAK</h2>
                <img src={mobile} alt="" id="mobImg" />
              </div>
            </>
          );
        }}
      </Media>
    </>
  );
}

export default Home;
