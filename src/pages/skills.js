import './static/css/buttons.css'
import "./static/css/page.css"
import resume from './static/pdf/resume.pdf'
import { Link } from "react-router-dom"

const Skills = () => {
    return (
        <div className='good-style'>
            <div className="repo-header">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
                    <path fill='#7b838d' fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <a href="https://noobscience.rocks/skills" className="repo-link">noobscience/Skills</a>
            </div>
            <hr />
            <h1 className='card-title'>Skills</h1>
            <div id='stack' className="card-box">
                <h1 className="sub-title">My Full Stack</h1>
                <ul>
                    <li>Python</li>
                    <li>Flask</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Jquery</li>
                    <li>Node</li>
                    <li>TypeScript</li>
                    <li>Postgresql</li>
                    <li>SQLite3</li>
                    <li>MongoDB</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="card-box">
                <h1 className="sub-title">Idealogy and Plans</h1>
                <p className='content'>
                    As a software developer, I am a strong advocate for the principles of simplicity and user-centered design, as espoused by the Linux philosophy of KISS (Keep It Simple, Stupid).
                    My portfolio showcases my ability to create intuitive and easy-to-use applications that prioritize both mobile and desktop usability.
                    I strive for high performance and a seamless user experience, as evidenced by my websites consistently scoring 90 or above on Lighthouse.

                    As a student with graduation in 2026, I am always looking for ways to improve and grow as a developer. I welcome suggestions and constructive feedback to help me achieve my goal of making a small impact in the dynamic world of software.
                    If you have any ideas or would like to collaborate, please don't hesitate to reach out. I am always open to new opportunities and eager to continue learning and expanding my skillset.
                </p>
            </div>
            <div id="resume" className="card-box">
                <h1 className="sub-title">Resume</h1>
                <p className='content'>
                    Check out my <Link to="/ReactSite/projects">Projects</Link>. Impressed with my work and have something for me?
                    Please feel free to reach out to me. I am available on various platforms including <a href="https://twitter.com/noobscience1">twitter</a>, <a href="mailto:noobscience@duck.com">mail</a> among others.
                    You can check out my full <a href="https://newtoallofthis123.github.io/tree" className="link hover_animation_underline">link tree</a>
                </p>
                <div style={{ textAlign: 'center', "margin-bottom": "1.2rem", }}>
                    <button className="download"><a href={resume}>Download My Resume!</a></button>
                </div>
            </div>
        </div>
    )
}

export default Skills
