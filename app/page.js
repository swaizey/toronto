
import About from "./components/About/About";
import Appoint from "./components/Appoint/Appoint";
import Hero from "./components/Hero/Hero";
import Medserv from "./components/Medserv/Medserv";
import Nav from "./components/nav";
import Subhero from "./components/Subhero/Subhero";
import styles from "./page.module.css";
import Swiper from "./components/swipe/Swiper";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav/>
      <Hero/>
      <Subhero/>
      <About/>
      <Medserv/>
      <Appoint/>
      <Swiper/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
