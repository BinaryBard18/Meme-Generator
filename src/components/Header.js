import React from "react"
import trollface from "../images/troll-face.png"

export default function Header(){
    return(
        <nav>
                <img src = {trollface} className="logo" />
                <h1 className="name">Meme Generator</h1>
                <h3 className="header_text"></h3>
        </nav>
    )
}