import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="m-2 md:m-0">
        <Navbar />
      </header>
      {/* Main content */}
      <div className="flex-1 m-2 md:m-0">
        <Outlet />
      </div>
      {/* Footer */}
      <footer className="mt-0">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
