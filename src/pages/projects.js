import { Link } from "react-router-dom"

const Projects = () => {
    return (
        <div>
            <div className="repo-header">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo color-fg-muted mr-2">
                    <path fill='#7b838d' fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
                <a href="https://noobscience.rocks/projects" className="repo-link">noobscience/Projects</a>
            </div>
            <hr />
            <h1 className="card-title">Projects</h1>
            <div className="card-box">
                <h2 style={{textAlign: "center", padding: "12px", fontWeight: "600",}} className="h2">Before You Proceed</h2>
                <p className="content">
                    As a hands-on learner, I have gained a wealth of experience through a diverse range of projects.
                    While not all of my endeavors have been successful, I believe that every experience has been valuable in helping me grow and improve.
                    The projects showcased on my portfolio are those that I am particularly proud of, but I invite you to explore my full range of work on my Github page.
                    There you will find a comprehensive collection of my projects, including updates and improvements made along the way. Thank you for considering my work.
                </p>
            </div>
            <div className="card-box">
                <h2 className="sub-title">NoobPaste</h2>
                <p className="content">
                    I am proud to introduce NoobPaste, my first independent web application development project. 
                    This application, which serves as a replica of pastebin.com, was built using Flask for the back-end and Bootstrap and jQuery for the user interface. 
                    One of the key features of NoobPaste is its emphasis on privacy, as it utilizes server-side encryption to ensure that neither I nor any other administrator can view users' private pastes. 
                    Additionally, I am currently working on developing an admin page to manage all pastes on the platform. 
                    This project is an ongoing effort and I welcome contributions on GitHub. 
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://www.youtube-nocookie.com/embed/RepoBnHNx_A"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://noobpaste.herokuapp.com">Visit the Site</a></button>
                </div>
            </div>
            <div className="card-box">
                <h2 className="sub-title">ShortPaw</h2>
                <p className="content">
                    Shortpaw is a personal URL shortening service that I developed to have full control over my data. The application is written in Python and utilizes PostgreSQL for secure and efficient storage and delivery of URLs.
                    Shortpaw also features a robust API built using Flask, making it easily accessible from any location.
                    This project is an ongoing development, and I welcome contributions on GitHub.
                    If you're looking for a secure and customizable URL shortener, Shortpaw is the perfect solution.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://www.youtube-nocookie.com/embed/z6C7a8BFCOQ"><i className="bi bi-youtube"></i> Watch the Showcase</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://shortpaw.herokuapp.com">Visit the Site</a></button>
                </div>
            </div>
            <div className="card-box">
                <h2 className="sub-title">ReactSite</h2>
                <p className="content">
                    Welcome to my portfolio website, which serves as a showcase of my skills in React development.
                    The site you are currently viewing is my latest creation, built using the latest React features such as useState and reactRouter.
                    My aim is to provide an enjoyable and user-friendly experience for visitors.
                    The design inspiration for this site comes from the clean and vibrant style of GumRoad.com.
                    I am continuously working to improve my skills in React and other web development technologies, and will be updating the site regularly with new features and improvements.
                    Be sure to check out my GitHub profile for the latest updates and projects.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://github.com/newtoallofthis123/ReactSite"><i className="bi bi-github"></i> GitHub</a></button>
                    <button style={{ backgroundColor: '#8aff67', }} className="download"><a href="https://newtoallofthis123.github.io/ReactSite">Visit the Site</a></button>
                </div>
            </div>
            <div className="card-box">
                <h2 className="sub-title">YTPS</h2>
                <p className="content">
                    YTPS stands for YouTube Terminal Search and Play and this is a simple CLI that does exactly what it says it does.
                    It lets you search youtube.com from the ease of your terminal and if you like something, you can easily play it on your favorite media player.
                    This was my first attempt at creating a beautiful CLI using rich module in python. So hopefully, this makes your terminal experience better.
                </p>
                <div style={{ textAlign: 'center' }}>
                    <button style={{ backgroundColor: '#f6ff00', margin: '1.8rem', }} className="download"><a href="https://github.com/newtoallofthis123/ytps"><i className="bi bi-github"></i> GitHub</a></button>
                    <button style={{ backgroundColor: '#44fffd', }} className="download"><a href="https://newtoallofthis123.github.io/ReactSite">More About</a></button>
                </div>
            </div>
            <p style={{ textAlign: 'center', }}>Impressed with my projects? Check out my <Link to="/ReactSite/skills" className="link hover_animation_underline">skills</Link> and resume. Thank You.</p>
        </div>
    )
}

export default Projects