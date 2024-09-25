import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop, TopBar } from "./components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  return (
    <main className="font-archivo bg-muted">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        rtl={false}
      />
      <ScrollToTop />
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
