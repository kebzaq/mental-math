import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Heading name="Adileshka" />
      <Intro />
      <Footer name="Kai" />
    </div>
  );
}

export default App;
