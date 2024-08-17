import HeroSection from "./components/sections/HeroSection";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import More from "./components/sections/More"

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <About/>
    <More/>
    <Contact/>
   </main>
  );
}
