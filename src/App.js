import "./App.css";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome"
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Hero />
      <Welcome />
      <Intro />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
