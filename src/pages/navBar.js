import { Link } from "react-router-dom"
import { useState } from "react"
import "./static/css/global.css"
import icon from "./static/images/noobscience.png"

const NavBar = () => {
    const [op_toggle, toggle_set] = useState(0)
    const update_toggle = () => { 
        if (op_toggle === 0) {
            toggle_set(1)
            document.getElementById("options").style.display = "block"
        }
        if (op_toggle === 1) {
            toggle_set(0)
            document.getElementById("options").style.display = "none"
        }
    }
    return (
        <div>
            <div className="nav">
                <ul>
                    <li id="nav_title"><img src={icon} style={{ width: "32px", verticalAlign: "middle", borderRadius: "24px"  }} alt="NoobScience Icon" /> NoobScience</li>
                    <li><Link to={"/ReactSite"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                    <li><Link to={ "/skills" }>Skills</Link></li>
                </ul>
                <hr />
            </div>
            <div className="m_nav">
                <ul>
                    <li id="nav_title"><img src={icon} style={{ width: "32px", verticalAlign: "middle", borderRadius: "24px" }} alt="NoobScience Icon" /> NoobScience <button onClick= {update_toggle} id="op_toggle"><i className="bi bi-list"></i></button></li>
                    <div id="options">
                        <li><Link to={"/ReactSite"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/projects"}>Projects</Link></li>
                        <li><Link to={ "/skills" }>Skills</Link></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavBar