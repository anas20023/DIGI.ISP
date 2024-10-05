import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './components/signin.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
    </Router>
  );
}
export default App;
