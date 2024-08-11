import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      color="#f3f"
      messages={["bah", "meh", "ok", "good", "show of balls"]}
      defaultRating={3}
    /> */}
  </React.StrictMode>
);
