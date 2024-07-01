import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Hero from "./page/hero";
import Auth from "./page/auth";
import React from "react";
import { AuthProvider } from "./context/app.context";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Hero></Hero>,
//   },
//   {
//     path: "/auth",
//     element: <Auth></Auth>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Hero></Hero>} />
          <Route path="/auth" element={<Auth></Auth>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
