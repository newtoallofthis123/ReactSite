import "./static/css/global.css"
import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div className="div-card">
            <h1 className="title">Ishan</h1>
            <h1 className="title">Joshi</h1>
            <div className="card-buttons">
                <h3 className="sub_title"><Link to="/about" style={{ background: "#75f0f3" }}>Student</Link><Link to="/projects" style={{ background: "#f888d6" }}>Open Source</Link><Link to="/skills" style={{ background: "#95ee65" }}>Tech</Link></h3>
            </div>
        </div>
    )
}