
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './sites/Home';
import About from './sites/About';
import Header from './components/Header';
import NotFound from './sites/NotFound';
import ContactUs from './sites/ContactUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
