import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Navigation from './Navigation';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div>
      <Navigation/>
      <Container>
        <Routes>
          <Route exact path="/" element={ <HomePage/> }/>
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/contact" element={ <ContactPage/> }/>
          <Route path="/user" element={ <UserPage/> }/>
        </Routes>
      </Container>        
    </div>
  );
}

export default App;
