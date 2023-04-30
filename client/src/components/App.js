import './styles/App.css';
import ContactUsLeft from './ContactUsLeft';
import ContactUsRight from './ContactUsRight';
import MainContent from './MainContent';
import Navbar from './Navbar';
import AboutMeModal from './AboutMeModal';
import { useState } from 'react';

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <>
      <div className='modal' >
        <p>Portfolio still in development mode. Work In Progress.</p>
      </div>

      { showAboutMe && <AboutMeModal setShowAboutMe={(value) => setShowAboutMe(value)} />}
      
      <Navbar />
      <div className='App'>
        <ContactUsLeft />
        <MainContent setShowAboutMe={(value) => setShowAboutMe(value)} />
        <ContactUsRight />
      </div>
    </>
  );
}

export default App;
