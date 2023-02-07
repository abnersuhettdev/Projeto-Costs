import {
  BrowserRouter as Router,
  
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Container from './components/layout/Container'
import Navbar from './components/layout/navbar.js'
import Footer from './components/layout/footer.js'
import Project from "./components/pages/project";



function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/newproject" element={<NewProject />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
