import React, { Component } from "react";
import ReactDOM from "react-dom/client";







const Title = () => (

  <div id="title" key="h2">
      
    <h2>Hunger-Box</h2>

  </div>
  
 
);

// same as above code
const HeadingComponent = ()=>(
  <div>
  
    <Title /> 
  
    <h1>Heading is here</h1>
    <h2>hading is 2 here </h2>
    </div>

);
// React components
// 1-functional components(NEW) 2- class components(OLD)

// functional Component is nothing but a javascript function which return peace of  JSX
    
  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);   // here we are rendring react elements
root.render(<HeadingComponent />); // here we are rendring react components