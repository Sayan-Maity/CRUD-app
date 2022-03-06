import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import NavTop from './components/layout/NavTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notfound from './components/pages/Notfound';
import Footer from './components/layout/Footer';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/addUser" element={<AddUser />} />
            <Route exact path="/editUser/:id" element={<EditUser />} />
            <Route exact path="/viewUser/:id" element={<ViewUser />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
