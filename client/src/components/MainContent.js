import dp from '../resources/myPhoto.jpeg';
import './styles/MainContent.css';
import TypeWriter from 'typewriter-effect';
import fitAndLife from '../resources/fitAndLife.png';
// import reactImg from '../resources/react.png';
// import nodeImg from '../resources/nodejs.png';
// import mongoImg from '../resources/mongo.png';
// import JavascriptImg from '../resources/javascript.png';

const MainContent = () => {
    const technologies = ['ReactJs', 'NodeJs', 'MongoDB', 'Express', 'Javascript', 'MUI', 'Bootstrap'];

    return (
        <div className='mainContent'>
            <img src={dp} alt='displayPicture' className='displayPicture' />
            <div style={{ padding: '6% 0', height: 'fit-content' }}>
                <h1>Abhinav Rathore</h1>
                <h2>Turning vision into reality!</h2>
                <button className='aboutButton'>About Me</button>
                <h3 className='interactiveText'> <TypeWriter options={{
                    autoStart: true,
                    delay: 80,
                    strings: technologies,
                    loop: true
                }} />
                </h3>
            </div>

            <div className='technologyImageContainer'>
                <i className="fa-brands fa-react reactImg"></i>
                <i className="fa-brands fa-html5 htmlImage"></i>
                <i className="fa-brands fa-css3-alt cssImage"></i>
                <i className="fa-brands fa-js jsImage"></i>
            </div>

            <h3 className='myDescription'>
                Hi, I'm a 25-year-old Indian Freelance Front-end developer.
                I'm an awesome guy who likes making perplexing things with web technologies.
                I like to resolve design problems, create smart user interface and imagine useful interaction,
                developing rich web experiences & web applications.
            </h3>

            {/* <h3 className='myDescription'> Work </h3> */}


            <ul className="workPage" id="workPage">
                <li>
                    <i>
                        <div className='project1'>
                            <img src={fitAndLife} className='fitAndLifeImg' alt='fitAndLife' />
                            <div className='mask'>
                            </div>
                        </div>
                    </i>
                </li>
            </ul>

            {/* <div className='workPage' id='workPage'>
                
            </div> */}
        </div>
    )
}

export default MainContent;