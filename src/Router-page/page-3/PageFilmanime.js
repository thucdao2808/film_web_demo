import React from 'react'
import Header from '../../components/header/Header'
import FilmAnime from '../../page/pageFirst/ListFilm/FilmAnime'
import Footer from '../../components/footer/Footer'
import UniqueFairyTale from '../../page/page-viewer-film/UniqueFairyTale/UniqueFairyTale'
import { Link } from 'react-router-dom'
const PageFilmanime = () => {
    return (
        <Link to="/UniqueFairyTale/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss">
        <div>
            <Header/>
            <UniqueFairyTale/>
            <Footer/>
        </div>
        </Link>
    )
}

export default PageFilmanime