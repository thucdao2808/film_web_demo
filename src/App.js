import React from 'react'
import "./App.css"
import {Routes, Route } from 'react-router-dom';
import PageMenu from './Router-page/PageMenu/PageMenu';
import PageDemoFilm from './Router-page/page-2/PageDemoFilm';
import PageSlider from './Router-page/page-4/PageSlider';
import PageFilmanime from './Router-page/page-3/PageFilmanime';
import Screm from './page/page-viewer-film/screm 6/Screm';
import PageMovieAnime from './Router-page/page-6/PageMovieAnime';
import PageVideo from './Router-page/page-7/PageVideo';
import RenderResult from './components/ReSultButton/RenderResult';
import Intro from "./components/intro/Intro"
import RenderTVShow from './page/page-viewer-film/TvSeris/RenderTVShow';
import RenderMovieOdd from './page/page-viewer-film/Movie-single/RenderMovieOdd';
import RenderTheatean from './page/page-viewer-film/theate/RenderTheatean';
import RenderActive from './page/page-viewer-film/FilmActive/RenderActive';
const App = () => {
    return (
        <div>
         
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/pageMenu' element={<PageMenu/>}/>
                <Route path="/mandolian/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss" element={<PageDemoFilm/>} />
                <Route path="/UniqueFairyTale/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss" element={<PageFilmanime/>}></Route>
                <Route path='/MovieTheaters/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss' element={<PageSlider/>}></Route>
                <Route path='/listSliderTwo/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss' element={<PageSlider/>}></Route>
                <Route path='/Screm/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss' element={<Screm/>}></Route>
                <Route path='/MovieSingle/:img/:title/:titleExtra/:country/:type/:director/:paramater/:year/:time/:statuss' element={<PageMovieAnime/>}></Route>
                <Route path="/video/:src" element={<PageVideo/>} />
                <Route path="/btn-result/:q" element={<RenderResult/>}/>
                <Route path='/tvmovie' element={<RenderTVShow/>}></Route>
                <Route path='/MovieOdd' element={<RenderMovieOdd/>}/>
                <Route path='/Theatean' element = {<RenderTheatean/>}/>
                <Route path='/active' element ={<RenderActive/>}/>
            </Routes>
           
        </div>
    )
}

export default App