import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Videos from '../../page/pageVideo/Videos/Video'
import { Link } from 'react-router-dom'
import "./PageVideo.css"
const PageVideo = () => {
    return (
        <div className='color-video'>
         <Link to='/video/:src' className='color-video'>
            <Header/>
            <Videos/>
            <Footer/>
        </Link>
        </div>
    )
}

export default PageVideo