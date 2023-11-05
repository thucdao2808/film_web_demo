import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Screm from '../../page/page-viewer-film/screm 6/Screm'
const PageListAnime2023 = () => {
    return (
        <Link to='/Screm/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss'>
            <Header></Header>
            <Screm/>
            <Footer/>
        </Link>
    )
}

export default PageListAnime2023