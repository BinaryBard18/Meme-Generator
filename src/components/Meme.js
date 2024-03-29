import React from "react"
// import memesData from "../components/imagedata"


export default function Meme(){

    const [meme,setMeme]  =React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes,setAllMemes] = React.useState([]);

    // const [memeImage,SetMemeImage] = React.useState("") //We will keep the string empty initially as we dont want the url to be found

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json()) //converted to JSON format 
            .then(data => setAllMemes(data.data.memes))
    },[])

    function getMemeImage(){

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            randomImage : url
        }))
    }

    function handleChangeText(event){
        const {name,value} = event.target//object destructuing
        setMeme(prevMemeText => {
            return {
                ...prevMemeText,
                [name] : value
            }
        })
    }
    

    
    return(
        <div>
            <div className="main-content">
                <div className="inputs">
                    <input 
                    placeholder="Top Text" 
                    className="input1"
                    value = {meme.topText}
                    name = "topText"
                    onChange={handleChangeText}
                    ></input>
            
                    <input 
                    placeholder="Bottom Text" 
                    className="input2"
                    value = {meme.bottomText}
                    name = "bottomText"
                    onChange={handleChangeText}
                    ></input>
                </div>
                <div className="button">
                    <button className="btn" onClick={getMemeImage}>Get a New Meme Image 🖼</button>
                </div>
                <div className="imageDiv">
                    <img src = {meme.randomImage} className="image"/>
                    <div className="textdiv">
                        <h2 className="meme--text toptext">{meme.topText}</h2>
                        <h2 className="meme--text bottomtext">{meme.bottomText}</h2>
                    </div>
                </div>
            </div>
            
        </div>
        
    )

    }



