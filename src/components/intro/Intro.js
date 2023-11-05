import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeXmark,faVolumeUp  } from '@fortawesome/free-solid-svg-icons';
import "./Intro.css"
import { useState } from "react";
import { Link } from "react-router-dom";
function Intro(props){
    const [muted,setMuted]=useState(true);
    const handleTextColor = ()=>{
         setTimeout(() => {
            document.getElementById("color-Text").classList.add("intro-title-video")
         },4000);
    }
    const handleClick =() => {
        const ReplaceLayout= document.getElementById("btn-to-menu")
        if(ReplaceLayout){
            ReplaceLayout.style.filter="blur(8px)";
           
        }
    }
    return (
        <div className="combine-video">
            <ReactPlayer
             playing={true} 
             width="100%" 
             height="100%"
             volume={1}
             muted={muted}
             url='https://vimeo.com/642845526'
             className='video-intro'
             autoPlays
              ></ReactPlayer>
         
            <div className="intro-video">
                       <h1 id="color-Text" className='intro-title-video' onChange={handleTextColor} >Welcome to My Website</h1>
                       <p className='overview'>If you want to watch a movie, click on the mode button to search for your movie. Wishing you a happy movie watching session</p> 
                       <p className="overview">Welcome to Ngocc Thucc's film website, where great stories are told on screen. Here, we are not just a place to watch movies, but a wonderful experience for those passionate about the art of cinema.</p> 
                       <p className="overview">Not only a place to watch movies, our website is also a destination for the movie-loving community. You can discuss, rate and share your thoughts with other cinema enthusiasts, expand your network and discover the secrets behind the doors of the world of cinema.</p> 
                       <Link to='/pageMenu'>
                         <div className="click_movie">
                              <button  className="btn-to-menu" onClick={handleClick}>Mount to Movie</button>
                          </div>
                       </Link>
            </div>
            {
                muted ? (
                <FontAwesomeIcon icon={faVolumeXmark} className='mute-btn' onClick={()=>setMuted(prev => !prev)} />
            ) : (<FontAwesomeIcon icon={faVolumeUp}  className='mute-btn' onClick={()=>setMuted(prev => !prev)} />)
            }
        </div>
    )
}
export default Intro;