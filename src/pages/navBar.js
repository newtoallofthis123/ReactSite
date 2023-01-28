import "./static/css/global.css"
import { Link } from "react-router-dom"
import icon from "./static/images/noobscience.png"
import data from "./static/db/data.json"
import { useState } from "react"

const dataList = () => {
    return (
        <datalist id="options">
            {data["options"].map((option) => (
                <option id={option} value={option}>{option}</option>
            ))}
        </datalist>
    )
}

const NavBar = () => {
    const [query, setQuery] = useState("")

    const navChange = (e) => {
        let options = data["options"]
        let tempQuery = (e.target.value).toLowerCase()
        console.log((options.includes(tempQuery)))
        if (options.includes(tempQuery)) {
            setQuery(tempQuery.toString())
        }
    }

    const navSubmit = (e) => {
        e.preventDefault()
        console.log(data["go"][query])
        window.location = "" + data["go"][query]
    }
    return (
        <nav>
            <div className="nav">
                <Link to="/" className="navHeader">
                    <img className="navIcon" src={icon} alt="NoobScience Icons" />
                </Link>
                <span className="search">
                    {dataList()}
                    <input type="text" onSubmit={navSubmit} onChange={navChange} list="options" placeholder="Search or jump to..." className="navInput" />
                    <button type="submit" onClick={navSubmit} className="navButton">/</button>
                </span>
                <div className="navAlign">
                    <li>
                        <Link to="/about" className="navLink">About</Link>
                    </li>
                    <li>
                        <Link to="/projects" className="navLink">Projects</Link>
                    </li>
                    <li>
                        <Link to="/skills" className="navLink">Skills</Link>
                    </li>
                    <li>
                        <Link to="/resume" className="navLink">Resume</Link>
                    </li>
                    <li>
                        <Link to="/links" className="navLink">Social</Link>
                    </li>
                </div>
            </div>
            <div className="nav">
                <div className="dropdown">
                    <button className="notifications" type="button" id="notifications" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-bell"></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="notifications">
                        {data["recents"].map((recent) => (
                            <li><a className="dropdown-item" href={recent.link}>{recent.title}</a></li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar