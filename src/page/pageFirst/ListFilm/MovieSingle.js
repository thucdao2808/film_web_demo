import React from 'react'
import "./MovieSingle.css"
import { Link } from 'react-router-dom'
const MovieSingle = ({ListMoieSingle}) => {

    const ListMoieSingles=[
        {
            id:"1",
            title:"đấu la đại lục",
            img:"https://tse3.mm.bing.net/th?id=OIP.4E9fnbUHLgpZd9pLEHM8pgHaE4&pid=Api&P=0&h=220",
            
        },
        {
            id:"2",
            title:"đấu phá thương khung",
            img:"https://tse2.mm.bing.net/th?id=OIP.2NwG4OGXa9zA78ktGVfY9QHaDu&pid=Api&P=0&h=220",
            
        },
        {
            id:"3",
            title:"thủy quái tuổi teen",
            img:"https://tse1.mm.bing.net/th?id=OIP.lDQjAmBFSnOhhlplGpN21AHaD3&pid=Api&P=0&h=220",
            
        },
        {
            id:"4",
            title:"The monkey king",
            img:"https://tse2.mm.bing.net/th?id=OIP.gleeXq4ITqwsC0mbRfEOkQHaEK&pid=Api&P=0&h=220",
            
        },
        {
            id:"5",
            title:"nghịch hiên chiến kỉ",
             img:"https://tse4.mm.bing.net/th?id=OIP.7Nck2hlUWlfEw5vMaGChcAHaEK&pid=Api&P=0&h=220",
            
         },
   
        
    ]
    return (
        <div>
            <h4 className='single'>Phim chiếu rạp</h4>
      <div className='Movie-single'>
        {ListMoieSingles.map((item, index) => (
            <Link to={`/MovieSingle/${encodeURIComponent(item.img)}
          /${encodeURIComponent(item.title)}
          /${encodeURIComponent(item.titleExtra)}
          /${encodeURIComponent(item.country)}
          /${encodeURIComponent(item.type)}
          /${encodeURIComponent(item.director)}
          /${encodeURIComponent(item.paramater)}
          /${encodeURIComponent(item.year)}
          /${encodeURIComponent(item.time)}
          /${encodeURIComponent(item.statuss)}`} className='link-single' href='#none' key={index}>
            <div className='product-single'>
              <img className='img-movie-single' src={item.img} alt='' />
              <span className='title-film-single'>{item.title}</span>
            </div>
          </Link>
        ))}
        </div>
        </div>
    )
}

export default MovieSingle
