import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Profile from './component/Profile/Profile';
import NotFound from './component/NotFound/NotFound';
import NavBar from './component/NavBar/NavBar';
import Services from './component/Services/Services';
import Contact from './component/Contact/Contact';
import Developpement from './component/Services/Development/Development';
import CyberSecurity from './component/Services/CyberSecurity/CyberSecurity';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/developpement" element={<Developpement />}/>
          <Route path="/services/cybersecurite" element={<CyberSecurity />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
