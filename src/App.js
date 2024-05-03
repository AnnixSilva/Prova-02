import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import FormularioContato from './FormularioContato';
import Qmsomos from './qmSomos';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>  
        <Routes>  
          <Route path='/Home' element={<Home />} />  
          <Route path='/FormularioContato' element={<FormularioContato />} />  
          <Route path='/qmSomos' element={<Qmsomos />} />  
        </Routes>  
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;