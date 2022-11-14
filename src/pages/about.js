// import profile from './static/images/profile.jpg'

const About = () => {
    return (
        <div className="about_div">
            <div style={{ "backgroundColor": "#75f0f3", }} className="nice_border">
                <h1>Who are you?</h1>
                <p>
                    Hello! I am Ishan, I am a student and tech enthusiast. I go by <a href="https://minetest.net">NoobScience</a> online.
                    I love software and I am an huge fan of open source software. I am currently a college freshman, studying computer science and engineering.
                    I love coding in <a href="https://python.org">python</a> and it is my primary language, although I am warming up to javascript. I am huge linux fan I love running virtual machines. I am love deep dives into how a application is built and
                    decoding software. I also like open source projects that aim to replace their proprietary alternatives.
                </p>
            </div>
            <div style={{ "backgroundColor": "#83f583", }} className="nice_border">
                <h1>Interests</h1>
                <p>
                    I am into a lot of stuff. I am mostly on my computer, the rest of the time, I am with my friends or with my furry friend. I love playing <a href="https://minetest.net">Minetest</a> and Rocket League.
                    
                </p>
            </div>
            <div style={{ "backgroundColor": "#f888d6", }} className="nice_border">
                <h1>Skills</h1>
                <p>
                    Hello! I am Ishan, I am a student and tech enthusiast. I go by <span className="highlight">NoobScience</span> online.
                    I love software and I am an huge fan of open source software. I am currently a college freshman, studying computer science and engineering.
                    I love coding in <span className="highlight">python</span> and it is my primary language, although I am warming up to javascript. I am huge linux fan I love running virtual machines. I am love deep dives into how a application is built and
                    decoding software. I also like open source projects that aim to replace their proprietary alternatives.
                </p>
            </div>
        </div>
    )
} 

export default About