

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "namste 2.0 here"
  );
  const heading2 = React.createElement(
      "h2",
      {
        id: "title2",
      },
      "namste  here"
    );

    const container = React.createElement(
      "div",
      {
        id: "div",
      },
    [heading1,heading2]
    );


    
 

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);