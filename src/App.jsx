import React, { useRef } from "react";
import "custom-cursor-react/dist/index.css";
import Home from "./components/Home/Home";
import { Parallax, useParallax } from "react-scroll-parallax";

import "./styles.css";
import AboutMe from "./components/AboutMe/AboutMe";
import { ScrollArea, ScrollTo } from "react-scroll-to";
import Navbar from "./components/Navbar/Navbar";

export default function App(props) {
  return (
    <div id="outer-container">
      {/* <Parallax speed="fast"> */}
      {/* <Navbar /> */}
      <div id="page-wrap">
        <Parallax speed={-100}>
          <Home />
        </Parallax>

        <Parallax speed={1} id="1">
          <ScrollArea
            className="h-[100vh] w-[100vw] bg-slate-900"
            id="AboutMeID"
          >
            <AboutMe />
          </ScrollArea>
        </Parallax>
      </div>
    </div>
  );
}
