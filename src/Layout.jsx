import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop, TopBar } from "./components";

export default function Layout() {
  return (
    <main className="font-archivo bg-muted">
      <ScrollToTop />
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
