import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import EventDetailsPage from './pages/EventDetailsPage/EventDetailsPage';
import NotFound404Page from './pages/NotFound404Page/NotFound404Page.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className='screen-div'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/:id' element={<Dashboard />} />
            <Route path='/dashboard/edit/:id' element={<EventDetailsPage />} />
            <Route path='*' element={<NotFound404Page />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;