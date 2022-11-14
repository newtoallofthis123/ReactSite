import React from 'react'
import './static/css/global.css'

const Home = () => {
    return (
        <div>
            <h1 className='main_title'><span style={{ color: "#75f0f3" }}>I</span>shan <span style={{ color: "#7bf57b" }}>J</span>oshi</h1>
            <h3 className="sub_title"><span style={{ background: "#75f0f3" }}>Student</span><span style={{ background: "#f888d6" }}>Open Source</span><span style={{ background: "#95ee65" }}>Tech</span></h3>
            <h3 className="m_sub_title"><span style={{ background: "#75f0f3" }}>Student</span></h3>
            <h3 className="m_sub_title"><span style={{ background: "#f888d6" }}>Open Source</span></h3>
            <h3 className="m_sub_title"><span style={{ background: "#95ee65" }}>Tech</span></h3>
            <p className="p_div">
                Hello World!
            </p>
        </div>
    )
}

export default Home;