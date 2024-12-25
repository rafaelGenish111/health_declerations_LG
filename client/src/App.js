import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AddDecleration from './components/AddDecleration';
import Thankyou from './components/Thankyou';


function App() {
  return (
    <Router basename='/health_declarations_LG'>
      <Routes>
        <Route path='/' exect element={<AddDecleration />} />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>
  </Router>
  );
}

export default App;
