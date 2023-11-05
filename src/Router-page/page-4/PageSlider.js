import React from 'react'
import Header from '../../components/header/Header' 
import Footer from '../../components/footer/Footer'
import GasRefining from '../../page/page-viewer-film/GasRefining/GasRefining'
import { Link } from 'react-router-dom'
const PageSlider = () => {
    return (
        <Link to='/MovieTheaters/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss'>

            <Header/>
            <GasRefining/>
            <Footer/>
        </Link>
    )
}

export default PageSlider