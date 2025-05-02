
import { Metadata } from "next";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HR Sajib",
    template: "%s | Harun Or Rashid Sajib",
  },
  description: "Harun Or Rashid Sajib | Portfolio",
};


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-white">
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default CommonLayout;
