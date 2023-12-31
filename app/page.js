import Courses from "./components/Courses";
import Footer from "./components/Footer";
import HeroMain from "./components/HeroMain";
import Navbar from "./components/NavbarM";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <HeroMain />
      <Courses />
      <Footer />
    </>
  );
}
