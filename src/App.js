import { Routes, Route } from "react-router"
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import HeroNav from './components/HeroNav';


function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/Events" element={<Events/>} />
      </Routes>
      <HeroNav/>
    </>
  );
}

export default App;
