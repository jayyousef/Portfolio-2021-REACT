import "./App.css";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome"
import Intro from "./components/Intro";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <Hero />
      <Welcome />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
