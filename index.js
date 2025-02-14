// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <ShopContextProvider>
//       <App />
//     </ShopContextProvider>
//   </BrowserRouter>,
// )

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css"; // If using styles
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from "./context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </BrowserRouter>,
);

