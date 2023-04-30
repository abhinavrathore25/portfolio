import dp from '../resources/myPhoto.jpeg';
import './styles/MainContent.css';
import TypeWriter from 'typewriter-effect';
import fitAndLife from '../resources/fitAndLife.png';

const MainContent = ({setShowAboutMe}) => {
    const technologies = ['ReactJs', 'NodeJs', 'MongoDB', 'Express', 'Javascript', 'MUI', 'Bootstrap'];

    return (
        <>
            <div className='mainContent'>
                <div className='aboutContainer'>
                    <img src={dp} alt='displayPicture' className='displayPicture' />
                    <div style={{ padding: '6% 0', height: 'fit-content' }}>
                        <h1>Abhinav Rathore</h1>
                        <h2>Turning vision into reality!</h2>

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
                            <span style={{position: 'relative', zIndex: '2'}}>About Me{'\u00A0\u00A0'}</span>
                            </button>
                            <i class="fa fa-light fa-angles-right aboutAngleIcon"></i>
                        </i>
                    </div>
                </div>


                <a href='#workPage' style={{color: 'white', textDecoration:'none'}}>
                    <div className='workTagContainer'>
                        <p className='workTag'>Works</p>
                        <i class="fa fa-light fa-angles-down"></i>
                    </div>
                </a>

                <ul className="workPage" id="workPage">
                    <li>
                        <a href='/#'>
                            <div className='project1'>
                                <img src={fitAndLife} className='fitAndLifeImg' alt='fitAndLife' />
                                <div className='mask'>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainContent;