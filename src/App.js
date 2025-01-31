// import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import Nav from './Components/Nav'
import Home from './Route/Home/Home';
import About from './Route/About/About';
import Season1 from './Route/Season 1/Season1';
// import Upload from './Route/Upload/Upload';
import Contact from './Route/Contact/Contact';
import { Routes, Route } from 'react-router-dom';
import StartSoon from './Components/StartSoon';
import ReactGA from 'react-ga4'


const TRACKING_ID = 'G-GR8252GC2Y'
ReactGA.initialize(TRACKING_ID)

function App() {

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
      title: 'Home Page'
    })
  }, [])

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/season1" element={<Season1 />} />
      <Route path="/upload" element={<StartSoon />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
