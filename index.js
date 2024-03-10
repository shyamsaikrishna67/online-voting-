import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./nav/AuthContext"; 

ReactDOM.render(
  
    <AuthProvider>
      <App />
    </AuthProvider>,
  document.getElementById("root")
);
