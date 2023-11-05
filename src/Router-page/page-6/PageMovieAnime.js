import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import MovieAnime from '../../page/page-viewer-film/PageMovieAnime/PageMovieAnime'
import { Link } from 'react-router-dom'

const PageMovieAnime = () => {
    return (
        <Link to='/MovieSingle/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss'>
            <Header/>
            <MovieAnime/>
            <Footer/>
        </Link>
    )
}

export default PageMovieAnime