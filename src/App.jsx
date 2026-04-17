
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// import Portfolio from './components/Portfolio';
import Header from './components/Header';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <Header />
    </div>
  );
}

export default App;
