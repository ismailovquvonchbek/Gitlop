import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
const PUBLISHABLE_KEY =
  "pk_test_Z3VpZGluZy1sYWR5YmlyZC0zLmNsZXJrLmFjY291bnRzLmRldiQ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </React.StrictMode>
);
