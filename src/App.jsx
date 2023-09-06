import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import EventDetails from './components/Dashboard/EventDetails/EventDetails';
import Invites from './pages/Invites/Invites.jsx';
// import NotFound404 from './pages/NotFound404/NotFound404.jsx';
import EditProfile from './pages/Settings/EditProfile/EditProfile.jsx';
import Profile from './pages/Settings/Profile/Profile.jsx';
import Login from './pages/UserAuthentication/Login/Login.jsx';
import LoginReset from './pages/UserAuthentication/LoginReset/LoginReset.jsx';
import Registration from './pages/UserAuthentication/Registration/Registration.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className='screen-div'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/:eventId' element={<EventDetails />} />
            {/* <Route path='/event/:eventDetailsId' element={<EventDetails />} /> */}
            <Route path='/invites' element={<Invites />} />
            {/* <Route path='*' element={<NotFound404 />} /> */}
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/loginreset' element={<LoginReset />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;