import React, { useState } from "react";
import "custom-cursor-react/dist/index.css";
import Home from "./components/Home/Home";
import ReactPageScroller from "react-page-scroller";
import HorizontalScroll from "react-scroll-horizontal";

export default function App(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (number) => {
    setCurrentPage(number);
  };

  const handleBeforePageChange = (number) => {
    console.log(number);
  };
  return (
    <>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
      >
        <Home />
      </ReactPageScroller>
    </>
  );
}
