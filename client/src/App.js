import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDecleration from './components/AddDecleration';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' exect element={<AddDecleration />} />
      </Routes>
  </Router>
  );
}

export default App;
