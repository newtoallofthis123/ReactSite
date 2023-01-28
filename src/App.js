import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Navbar from './pages/navBar';
import resume from './pages/static/pdf/resume.pdf';

const Resume = () => {
  return (
    <div className="resume">
      <iframe src={resume} title="Resume" type="pdf" />
    </div>
  );
}

const Links = () => { 
  return (
    <div>
      {window.location = "https://links.noobscience.rocks"}
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/links'>
          <Links />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
