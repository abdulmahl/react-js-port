import AboutMe from "../Home/AboutMe";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";
import HeroSection from "../Home/HeroSection";
import MyPortfolio from "../Home/MyPortfolio";
import MySkills from "../Home/MySkills";
import Testimonial from "../Home/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
