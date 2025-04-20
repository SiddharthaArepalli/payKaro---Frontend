import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DashBoard from './components/DashBoard';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import Send from './components/SendMoney';
import SignatureBadge from './components/SignatureBadge';
import {useEffect }from 'react';

function App() {
  useEffect(() => {
    console.log(
      "%cDeveloped by Sid with ❤️",
      "color: #e91e63; font-size: 16px; font-weight: bold;"
    );
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <SignatureBadge/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/send" element={<Send />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
