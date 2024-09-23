import { Outlet } from "react-router-dom";
import { Footer, Header, TopBar } from "./components";

export default function Layout() {
  return (
    <main className="font-archivo bg-muted">
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
