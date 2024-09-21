import { Outlet } from "react-router-dom";
import {  Footer, Header, TopBar } from "./components";

export default function Layout() {
  return (
    <main className="font-archivo">
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
