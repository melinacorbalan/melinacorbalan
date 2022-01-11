import './App.css';
import 'animate.css';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './routes/AboutMe';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
