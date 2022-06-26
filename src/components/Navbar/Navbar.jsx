import React, { useState } from "react";
import { elastic as Menu } from "react-burger-menu";
import { ScrollArea, ScrollTo } from "react-scroll-to";

function Navbar() {
  return (
    <Menu>
      <div id="about" className="menu-item">
        <ScrollTo>
          {({ scroll }) => (
            <a
              id="home"
              className="menu-item cursor-pointer"
              onClick={() => {
                document.getElementById("react-burger-cross-btn").click();
                scroll({ y: 0, smooth: true });
              }}
            >
              Home
            </a>
          )}
        </ScrollTo>
      </div>
      <div id="about" className="menu-item">
        <ScrollTo>
          {({ scroll }) => (
            <a
              id="about"
              className="menu-item cursor-pointer"
              onClick={() => {
                document.getElementById("react-burger-cross-btn").click();
                scroll({ y: 900, smooth: true });
              }}
            >
              About Me
            </a>
          )}
        </ScrollTo>
      </div>
      <div id="contact" className="menu-item">
        <ScrollTo>
          {({ scroll }) => (
            <a
              id="home"
              className="menu-item cursor-pointer"
              onClick={() => {
                document.getElementById("react-burger-cross-btn").click();
                scroll({ y: 0, smooth: true });
              }}
            >
              Project
            </a>
          )}
        </ScrollTo>
      </div>
    </Menu>
  );
}

export default Navbar;
