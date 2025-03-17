
import Header from '../components/Header';
import Home from '../components/Home';
import Services from '../components/Services';
import Founder from '../components/Founder';
import Contact from '../components/Contact';
import Exit from '../components/Exit';

function MainContainer() {
  return (
    <div>
      
      <Header />
      <section id="home">
      <Home/>
      </section>
      <section id="services">
      <Services/>
      </section>
      <section id="founder">
      <Founder/>
      </section>
      <section id="contact">
      <Contact/>
      </section>
      <Exit/>
    </div>
  );
}

export default MainContainer;
