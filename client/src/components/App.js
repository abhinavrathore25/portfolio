import './styles/App.css';
import ContactUsLeft from './ContactUsLeft';
import ContactUsRight from './ContactUsRight';
import MainContent from './MainContent';
import Navbar from './Navbar';
import AboutMeModal from './AboutMeModal';
import { useState } from 'react';
import backgroundImage from '../resources/backgroundPattern.png';

function App() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <>
      {/* <div className='modal' >
        <p>Portfolio still in development mode. Work In Progress.</p>
      </div> */}

      <img src={ backgroundImage } alt='backgroundImage' 
        style={{ position: 'absolute', zIndex:'-100',
         width: '100%', height:'100%', objectFit: 'cover',
         opacity:'0.2' }}
      />

      {showAboutMe && <AboutMeModal setShowAboutMe={(value) => setShowAboutMe(value)} />}

      <Navbar setAboutModal={(value) => setShowAboutMe(value)} />
      <div className='App'>
        <ContactUsLeft />
        <MainContent setShowAboutMe={(value) => setShowAboutMe(value)} />
        <ContactUsRight />
      </div>
    </>
  );
}

export default App;
