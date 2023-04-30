import React from 'react';
import './styles/AboutMeModal.css';

const AboutMeModal = ({ setShowAboutMe }) => {
    return (
        <div className='aboutMeModal'>
            <button onClick={() => setShowAboutMe(false)} className='closeAboutModal'>X</button>
            <div className='description'>
                <h1>About Me.</h1><br />

                <h3 className='myDescription'>
                    Hi, I'm a 25-year-old Indian Freelance Front-end developer.
                    I'm an intriguing guy who likes making perplexing things with web technologies.
                    I like to resolve design problems, create smart user interface and imagine useful interaction,
                    developing rich web experiences & web applications.
                </h3>

                <div className='technologyImageContainer'>
                    <div className='techWrapper'>
                        <i className="fa-brands fa-react reactImg"></i>
                        <div className='techHeadings techHeadingsReact'>React JS.</div>
                    </div>

                    <div className='techWrapper'>
                        <i className="fa-brands fa-html5 htmlImage"></i>
                        <div className='techHeadings techHeadingsHtml'>HTML5.</div>
                    </div>

                    <div className='techWrapper'>
                        <i className="fa-brands fa-css3-alt cssImage"></i>
                        <div className='techHeadings techHeadingsCss'>Is Fun.</div>
                    </div>

                    <div className='techWrapper'>
                        <i className="fa-brands fa-js jsImage"></i>
                        <div className='techHeadings techHeadingsJs'>Semicolon.</div>
                    </div>

                </div>
            </div>

            <div className="reachOutFormContainer">
                <h1 style={{ margin: '0' }}>Lets Chat.</h1>
                <p>A project, a Freelance, or a cup of coffee.</p>
                <form action="/#" className="reachOutForm">

                    <label htmlFor="name">Name</label><br />
                    <input type="text" id='name' className="name" />
                    <br />

                    <label htmlFor="email">Email</label><br />
                    <input type="text" id="email" className="email" />
                    <br />

                    <label htmlFor="message">Message</label><br />
                    <textarea name="message" id="message" className='message' cols="30" rows="5" />
                    <br />

                    <button className='aboutButton'>SEND</button>
                </form>
            </div>

        </div>
    )
}

export default AboutMeModal;