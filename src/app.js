import React from "react";
import ReactDom from "react-dom/client";

const App = () => {
  return <div className="text-3xl text-orange-500">Hello</div>;
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App />);
