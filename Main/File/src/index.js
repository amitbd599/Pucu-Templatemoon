import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <ThemeProvider>
      <Toaster
        containerClassName="toaster-container"
        toastOptions={{
          duration: 500000,
        }}
      />
      <App />
    </ThemeProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
