import React from 'react'
import Header from "../../../../src/components/header/Header"
import TvSerris from './TvSerris'
import Footer from "../../../../src/components/footer/Footer"
import { Link } from 'react-router-dom'
const RenderTVShow = () => {
    return (
        <Link to= '/tvmovie'>
             <div>
                  <Header/>
                  <TvSerris/>
                  <Footer/>
             </div>
        </Link>
    )
}

export default RenderTVShow