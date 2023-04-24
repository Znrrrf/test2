// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ManagePage from './components/ManagePage';
import NavBar from './components/Navbar';
import RegisPage from './components/RegisPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ManagePage /> */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/manage' element={<ManagePage />} />
        <Route path='/register' element={<RegisPage />} />
      </Routes>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
