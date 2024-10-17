import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/signin.tsx';
import Contact from './pages/Contact.tsx';
import NewConnection from './pages/NewConnection.tsx'
import Packages from './pages/Packages.tsx';
import Admin from './components/Admin.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newcnn" element={<NewConnection />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/adminpanel" element={<Admin />} />
      </Routes>
    </Router>
  );
}
export default App;
