
import React from 'react';
import { useParams } from 'react-router-dom';
import { ListAnimes } from '../header/Data';
import "./Result.css"
const ResultBtn = ({ ListAnime }) => {
  const { q } = useParams();
 
  const filteredMovies = ListAnimes.filter((movie) =>
    movie.title.toLowerCase().includes(q.toLowerCase())
   
  );
 console.log(q)
 console.log(ListAnimes)
 console.log(filteredMovies);
  return (
    <div className='body-result-input'>
      <p className='title-result'>Bạn vừa tìm kiếm: {q}</p>
      {filteredMovies.map((movie) => (
        <div>
        <div key={movie.id} className='render-img'>
          <img src={movie.img} alt={movie.title} className='img-result-input' />
        </div>
        <div className='content-movie'>
             <h3 className='line-content'> Nội dung</h3>
             <div className='line-cara'></div>
             <p className='movie-content'>{movie.content}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ResultBtn;

