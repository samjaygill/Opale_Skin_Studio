import Header from '../components/Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Founder from '../components/Founder';
import Contact from '../components/Contact';
import Footer from "../components/Footer";

function MainContainer() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="maisy">
        <Founder />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
      <Footer />
      </section>
    </div>
  );
}

export default MainContainer;
