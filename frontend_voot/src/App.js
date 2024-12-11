// import { Link, Route, Router } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './navbar';
import VoterLoginPage from './components/VoterLoginPage';
import VoterRegistrationForm from './components/VoterRegistrationForm';
import Forgot_pass from './components/Forgot_pass';
import VoterDetails from './components/VoterDetails';
import Home from './components/Home';
import Edit_Profile from './components/Edit_Profile';
import Register from './components/Register';
import Log_out from './components/Log_out';
// import Main from './components/Main';

// import VoterRegistrationForm from './VoterRegistrationForm ';
// import Registration from './components/VoterRegistrationForm'

function App() {
  return (
    <>

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VoterLoginPage />} />
          <Route path='/VoterRegistrationForm' element={<VoterRegistrationForm />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Forgot_pass' element={<Forgot_pass />} />
          <Route path='/VoterDetails' element={<VoterDetails />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Edit_Profile' element={<Edit_Profile />} />
          <Route path='/Log_out' element={<Log_out />} />
          {/* <Route path='/Main' element={<Main />} />  */}
        </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
