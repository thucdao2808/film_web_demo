import React from 'react'
import "./WatchPage.css"
import Items from './ListFilm/Items'
import MovieTheaters from './ListFilm/MovieTheaters'
import ListFilm from './ListFilm/ListFilm'
import YourComponent from "./ListFilm/SelectMusic"
import MovieSingle from './ListFilm/MovieSingle'
import FilmAnime from './ListFilm/FilmAnime'
import PagelistSlider from './ListFilm/Pageslider_2'

const WatchEvent = () => {
    return (
        <div className='page-1'>
            <Items/>
           <MovieTheaters/>
           <div className='product-center'>
             <div className='list-filmCenter'>
               <ListFilm/>
             </div>
             <div className='YourComponent'>
                <YourComponent></YourComponent>
             </div>
           </div>
           <MovieSingle/>
           <PagelistSlider/>
           <FilmAnime></FilmAnime>
          
        </div>
    )
}

export default WatchEvent