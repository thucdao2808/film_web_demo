import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import WatchEvent from '../../page/pageFirst/WatchEvent'
import { Link } from 'react-router-dom'
import "../../App.css"
const PageMenu = () => {
    return (
        <Link to="/pageMenu">
            <div>
               <Header/>
               <WatchEvent/>
               <Footer/>
            </div>
        </Link>
    )
}

export default PageMenu