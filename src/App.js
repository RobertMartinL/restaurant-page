import { Routes, Route } from "react-router";
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Featured from './components/Featured';
import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer'
import LocationDetails from "./components/LocationDetails";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Featured" element={<Featured/>} />
      </Routes>
      <Routes>
        <Route path="About" element={<About/>} />
        <Route path="Menu" element={<Menu/>} />
        <Route path="LocationDetails" element={<LocationDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
