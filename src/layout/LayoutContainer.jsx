import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutContainer = () => {
  return (
    <div className="bg-errie-black min-h-screen">
      <Header />
      <main className="relative z-0 min-h-[calc(100vh-header-height-footer-height)]">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default LayoutContainer;
