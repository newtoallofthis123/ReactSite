import React, { useState, useEffect } from 'react'
import moment from 'moment/moment';
import "./static/css/global.css"
import data from "./static/db/data.json"
import Main from "./main"

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/newtoallofthis123/repos?sort=updated&per_page=10`);
            const data = await response.json();
            setRepositories(data);
        }
        fetchData();
    }, []);

    return (
        <div style={{margin: "1.2rem"}}>
            {repositories.map((repo) => (
                <div className='repo' key={repo.id}>
                    <img src={repo.owner.avatar_url} alt="UserPhoto" />
                    <a href={repo.html_url}>{repo.full_name}</a>
                </div>
            ))}
        </div>
    );
}

const RecentList = () => {
    return (
        <div>
            {data["recents"].map((recent) => (
                <div className="Timeline">
                    <div className='recent' key={recent.id}>
                        <a href={recent.link}>{recent.title}</a>
                        <p className="timeAgo">{moment(recent.time, "DD MM YYYY").fromNow()}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <div className="main-flex">
                <div className="item1">
                    <div className="repo_header">
                        <p>Top Repositories</p>
                        <button className="btn btn-primary new_repo"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-repo">
                            <path fill='#ffff' fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                        </svg> New</button>
                    </div>
                    <input type="text" placeholder='Find a repository...' className="repo-search" />
                    {RepositoryList()}
                    <div className="div-card" onClick={() => { window.location = 'https://github.com/newtoallofthis123/ReactSite' }} style={{ marginTop: "10%", textAlign: "center", marginRight: "1.8rem", marginLeft: "1.8rem", "cursor": "pointer" }}>
                        <h3 className="h3">Made with ❤️</h3>
                        <h3 className="h3">And ⏳ React</h3>
                    </div>
                </div>
                <div className="item2">
                    <Main />
                </div>
                <div className="item3">
                    <div className="style-div">
                        <p style={{ color: "#c9d1d9", fontWeight: "600"}}>Latest Changes</p>
                        {RecentList()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;