import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import environment from './environment';
import SingleEvents from './pages/SingleEvents';
import MembershipCards from './pages/MembershipCards';
import { Accounts } from './pages/Accounts';
import AccountData from './data/AccountsData.json';
import Memberdetails from './pages/Memberdetails';
import Footer from './components/Footer';
import Header from './components/Header';
import UpcomingEvents from './pages/UpcomingEvents';
import Mentors from './pages/Mentors';
import MentorsDetails from './pages/MentorsDetails';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<UpcomingEvents apiUrl={environment.apiUrl} />} path='/upcoming-events' />
        <Route path="/event/:id" element={<SingleEvents apiUrl={environment.apiUrl} />} />
        <Route path="/membership" element={<MembershipCards/>} />
        <Route path="/accounts" element={<Accounts data={AccountData} />} />
        <Route path="/member-details" element={<Memberdetails/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="/mentors-details" element={<MentorsDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
