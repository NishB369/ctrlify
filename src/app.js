import React from "react";
import ReactDom from "react-dom/client";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
