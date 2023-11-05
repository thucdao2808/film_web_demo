import React from 'react'
import Header from '../../components/header/Header'
import Mandalorian from '../../page/page-viewer-film/Mandolian/Mandolian'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
const PageDemoFilm = () => {
    return (
        <Link  to="/mandolian/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss">
        <div>
            <Header/>
            <Mandalorian/>
            <Footer/>
        </div>
        </Link>
    )
}

export default PageDemoFilm