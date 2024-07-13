import React from "react";
import './index.css'
const Podcast = () =>{
    return(
    <div className ="Podcast">
        <div className="podcastTitle">
        <h1>Protechs Podcast</h1>
        <p>Welcome to ProTechs podcast where we talk about careers,
        <br></br>
        money, friendships and everything in between.
        Hosts: <li>Gladwell Wanjiku</li>
               <li>Jane Kibaara</li>
               <li>Fridah Wothaya</li>
               <li>Karen Philip</li>
               <li>Agnes Wangesha</li>
        </p>
        </div>
        <div className="episodes">
            <div className="mics">
            <figcaption>Life Lately</figcaption>
            <img src="/Images/headphones.png" className="mic" alt=""/>
            <figcaption>Adulting</figcaption>
            <img src="/Images/headphones.png" className="mic" alt=""/>
            </div>
            <div className="mics2">
            <figcaption id="mic">Career</figcaption>
            <img src="/Images/headphones.png" className="mic" alt=""/>
            <figcaption id="mic">Getting ready for the workspace</figcaption>
            <img src="/Images/headphones.png" className="mic" alt=""/>
            </div>
        </div>
        </div>
    )
}
export default Podcast;