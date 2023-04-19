import './styles/App.css';
import ContactUsLeft from './ContactUsLeft';
import ContactUsRight from './ContactUsRight';
import MainContent from './MainContent';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <div className='modal' >
        <p>Portfolio still in development mode. Work In Progress.</p>
      </div>
      <Navbar />
      <div className='App'>
        <ContactUsLeft />
        <MainContent />
        <ContactUsRight />
      </div>
    </>
  );
}

export default App;
