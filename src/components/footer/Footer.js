import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faFacebookSquare, faTiktok, } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Footer = () => {

    return (
        
          <div className='content-footer'>
            <div className='footer-page'>
                <img  className='img-footer' src='https://tse2.mm.bing.net/th?id=OIP.eGxwaCilF5eLfhVKJ2y5uAHaHa&pid=Api&P=0&h=220' alt=''></img>
                
                <span className='profile-author'>Tik tok:ngocthuc_288</span>
            </div>
            <div className='social-personal'>
              <a className='link-author' href='https://www.facebook.com/roima.kevin'>
                 <FontAwesomeIcon icon={faFacebookSquare} />
                 
              </a>
              <a className='link-author' href='https://www.tiktok.com/@ngocthuwc28.ci?_t=8gGMO0iLYck&_r=1&fbclid=IwAR3mH6sCxAOiL3ajev7fI3Hlfva_WXTp-0rb5Ju7mNMMuHNS0P5G2-ZO-sg'>
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a className='link-author' href='https://www.instagram.com/'>
                 <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
        </div>
        
    )
}

export default Footer