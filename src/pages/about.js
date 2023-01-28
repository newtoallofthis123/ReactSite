import profile from './static/images/profile.png'
import "./static/css/page.css"
// import { Link } from "react-router-dom"

const About = () => {
    return (
        <div style={{ backgroundColor: "#0d1117"}}>
            <div className="repo-header">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
                    <path fill='#7b838d' fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <a href="https://noobscience.rocks/about" className="repo-link">noobscience/About</a>
            </div>
            <hr />
            <div className='card-box'>
                <h1 className="sub-title">Who are you?</h1>
                <div className="content">
                    Good Evening! I am Ishan. I am a tech-savvy student with a passion for software development,
                    I am constantly seeking new opportunities to learn and grow in the field.
                    My primary focus is on building full stack applications using the Flask API and MERN stack.
                    Known online as NoobScience, I am also a strong advocate for open source software and Linux.
                    Currently, I am studying computer science and engineering at GRIET, where I specialize in coding
                    with Python, and am also expanding my skills in JavaScript.
                    I am passionate about understanding how software works, and particularly
                    enjoy diving deep into the inner workings of applications and open source
                    projects that aim to replace proprietary alternatives.
                    With a strong foundation in technology and a deep love for open source software,
                    I am excited to continue exploring new opportunities in the field. Let's connect!
                </div>
            </div>
            <div className='card-box'>
                <h1 className="sub-title">Interests</h1>
                <div className="content">
                    As a versatile individual with a passion for technology, I am constantly engaged in a variety of activities.
                    Whether I am on my computer exploring the latest advancements in software development or spending time
                    with friends and my beloved dog, Lyka, I am always striving to learn and grow.
                    My interests include playing games such as Minetest and Rocket League,
                    as well as following the latest developments in esports. Additionally,
                    I enjoy writing and sharing my thoughts and ideas through my active Twitter presence and personal blog.
                    With a strong background in software development and a love for creating,
                    I am excited to continue pursuing new opportunities and challenges in this field.
                </div>
            </div>
            <div className='card-box'>
                <h1 className="sub-title">More About Me</h1>
                <div style={{textAlign: "center"}}>
                    <img src={profile} style={{width: "24%"}} alt="profilePicture" />
                </div>
                <div className="content">
                    As a tech-savvy individual with a passion for innovation and experimentation,
                    I am currently focused on mastering the JAMStack and exploring the MERN stack
                    for web development. I am also deeply interested in the world of AI, and am
                    fascinated by the capabilities of language models like ChatGPT. I have a broad range of
                    interests and am always open to discussing new topics and ideas. My personal tech setup
                    includes a Lenovo ideapad3 laptop, a Samsung M13 Android phone, and a fitness tracker.
                    I am a huge fan of customizing my software to suit my needs and preferences, and I am
                    always looking for ways to improve my workflow and productivity. I am also active on
                    Github and am open to contributing to open-source projects or collaborating with other
                    developers. If you're interested in connecting or working together, feel free to reach
                    out to me via mail. Let's connect and see how we can create something amazing together.
                </div>
            </div>
        </div>
    )
} 

export default About