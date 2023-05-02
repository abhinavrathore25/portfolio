import dp from '../resources/myPhoto.jpeg';
import './styles/MainContent.css';
import TypeWriter from 'typewriter-effect';
import fitAndLife from '../resources/fitAndLife.png';
import bugTrackerImg from '../resources/bugTrackerImg.png';
import Footer from './Footer';
import { useEffect } from 'react';

const MainContent = ({ setShowAboutMe }) => {
    const technologies = ['ReactJs', 'NodeJs', 'MongoDB', 'Express', 'Javascript', 'MUI', 'Bootstrap'];

    useEffect(() => {
        const hackerText = document.getElementById('hackerText');
        // const letters = 'abcdefghijklmnopqustuvwxyz';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let iterations = 0;

        let textInterval = setInterval(() => {

            hackerText.innerHTML = 
            hackerText.innerHTML.split('')
            .map((letter, index) => {
                if(index < iterations){
                    return hackerText.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];   
            })
            .join('');

            if(iterations >= hackerText.innerHTML.length) clearInterval(textInterval);

            iterations += 1/3;

        }, 30);
         
    }, []);

    return (
        <>
            <div className='mainContent'>
                <div className='aboutContainer' id='home'>
                    <img src={dp} alt='displayPicture' className='displayPicture' />
                    <div style={{ padding: '6% 0', height: 'fit-content' }}>
                        <h1>Abhinav Rathore</h1>
                        
                        <h2 id='hackerText' data-value='TURNING VISION INTO REALITY!'>
                        TURNING VISION INTO REALITY!
                        </h2>

                        <h3 className='interactiveText'> <TypeWriter options={{
                            autoStart: true,
                            delay: 80,
                            strings: technologies,
                            loop: true
                        }} />
                        </h3>

                        <i>
                            <button className='aboutButton' onClick={() => setShowAboutMe(true)}>
                                <div className='aboutMask'>MASK</div>
                                <span style={{ position: 'relative', zIndex: '2' }}>About Me{'\u00A0\u00A0'}</span>
                            </button>
                            <i className="fa fa-light fa-angles-right aboutAngleIcon"></i>
                        </i>
                    </div>
                </div>


                <a href='#workPage' style={{ color: 'white', textDecoration: 'none' }}>
                    <div className='workTagContainer'>
                        <p className='workTag'>Works</p>
                        <i className="fa fa-light fa-angles-down"></i>
                    </div>
                </a>

                <ul className="workPage" id="workPage">
                    <li>
                        <div className='project'>
                            <img src={fitAndLife} className='workImage' alt='fitAndLife' />
                            <div className='workMask'>
                                <button>
                                    <a href='https://fitandlife.cyclic.app/' target='_blank' rel="noreferrer" className='workLink'>
                                        VISIT WEBSITE
                                    </a>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>

                        <div className='project'>
                            <img src={bugTrackerImg} className='workImage' alt='bugTrackerImg' />
                            <div className='workMask'>
                                <button>
                                    <a href='https://bugtracker.cyclic.app/' target='_blank' rel="noreferrer" className='workLink'>
                                        VISIT WEBSITE
                                    </a>
                                </button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <Footer />
                    </li>
                </ul>
            </div>

        </>
    )
}

export default MainContent;