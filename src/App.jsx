import React, { useState } from "react";
import "custom-cursor-react/dist/index.css";
import Home from "./components/Home/Home";

export default function App(props) {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      {/* <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
      > */}
      <Home />
      {/* </ReactPageScroller> */}
    </>
  );
}
