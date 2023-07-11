import './App.css';
import Navbar from './compontents/header/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stoebern from './pages/Stoebern';
import Index from './pages/Index';

function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Routes>
         <Route path='/index' element={<Index />} />
         <Route path='/stoebern' element={<Stoebern />} />
       </Routes>
      </Router>
    </>
  );
}

export default App;
