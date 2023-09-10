import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage.jsx';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage';
import PastEventsPage from './pages/PastEventsPage/PastEventsPage';
import NotificationsPage from './pages/NotificationsPage/NotificationsPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import PrintPage from './pages/PrintPage/PrintPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFound404Page from './pages/NotFound404Page/NotFound404Page.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div>
      <div className='screen-div'>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path='/' element={<DashboardPage />} />
              <Route path='/dashboard' element={<DashboardPage />} />
              <Route path='/dashboard/:id' element={<DashboardPage />} />
              <Route path='/dashboard/edit/:id' element={<EventDetailsPage />} />
              <Route path='/past-events' element={<PastEventsPage />} />
              <Route path='/notifications' element={<NotificationsPage />} />
              <Route path='/settings' element={<SettingsPage />} />
              <Route path='/print' element={<PrintPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='*' element={<NotFound404Page />} />
            </Routes>
        </BrowserRouter>
      </div>
      <div className='footer-div'>
        <Footer />
      </div>        
    </div>
  );
}

export default App;