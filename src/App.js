import { Route, Routes } from 'react-router-dom';
import Header from './components/Navbar';
import Home from './components/Home';
import Quotes from './components/Quotes';
import CalcUserInterface from './components/Calculator';

const App = () => (
  <div>
    <Header />
    <div className="home-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<CalcUserInterface />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </div>
  </div>
);

export default App;
