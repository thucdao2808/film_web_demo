import React from 'react'
import "./MovieTheaters.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"
const MovieTheaters = () => {
    const Movies =[
        {
            id:"1",
            statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"đấu la đại lục",
            img:"https://tse1.mm.bing.net/th?id=OIP.4x9lZaZT3u0_HG-MQbu8UAAAAA&pid=Api&P=0&h=220",
            
        },
        {
            id:"2",
     statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"cái chết của bảy vị vua",
            img:"https://tse3.mm.bing.net/th?id=OIP.yEY-ctbA_tXPzTsH4e0HJQHaDq&pid=Api&P=0&h=220",
            
        },
        {
            id:"3",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"khắc tinh của quỷ",
            img:"https://tse1.mm.bing.net/th?id=OIP.cOmB59P-FPkOs86yXAHorwHaEK&pid=Api&P=0&h=220",
            
        },
        {
            id:"4",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"âm mưu của quỷ",
            img:"https://tse2.mm.bing.net/th?id=OIP.sImIYMKglQ5P30sn2NIS9gHaEW&pid=Api&P=0&h=220",
            
        },
        {
            id:"5",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"ngọt đắng cuộc đời",
             img:"https://tse3.mm.bing.net/th?id=OIP.2tJJeMfqNdhjhHjZ8h7nJQHaEK&pid=Api&P=0&h=220",
            
         },
        {
            id:"6",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"vô danh",
            img:"https://tse2.mm.bing.net/th?id=OIP.shyFL9DnMULq2EU8bnIucQHaEK&pid=Api&P=0&h=220",
            
        },
        {
            id:"7",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"thiên đàng hay địa ngục",
            img:"https://tse4.mm.bing.net/th?id=OIP.0WmYhS120c-2AT5eKZ6ZBAHaEK&pid=Api&P=0&h=220",
            
        },
        {
            id:"8",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"long mã tinh thần",
            img:"https://tse2.mm.bing.net/th?id=OIP.EPE8vhjpZpxOGcTbF0gzqgHaEK&pid=Api&P=0&h=220",
            
        },
        {
            id:"9",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"thời địa của ta",
            img:"https://tse1.mm.bing.net/th?id=OIP.kmrddIHgEtX-5G99UtnPlAHaEB&pid=Api&P=0&h=220",
            
        },
        {
            id:"10",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
         
            title:"Indiana Jones và vòng quay định mệnh ",
            img:"https://tse4.mm.bing.net/th?id=OIP.s0Ar-hv3_3akEWSOxjyfzwHaEK&pid=Api&P=0&h=220",
            
        },
        {
            id:"11",
             statuss:"đã kết thúc",
            year:"2012",
            type:"phim chiến dấu", 
            time:"132 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"người Mandorian",
           
            img:"https://tse1.mm.bing.net/th?id=OIP.okamh02XxqZPVMYyjb77GQHaEL&pid=Api&P=0&h=220",
            
        },
    ]
    const [currentIndex,setCurrentIndex]= useState(0);
    const maxIndex = Movies.length;
    const handleBtnRight = () =>{
        console.log(currentIndex)
        
        setCurrentIndex(currentIndex + 1);
        
    }
    const handleBtnLeft = () =>{
        console.log(currentIndex)
        setCurrentIndex(currentIndex - 1);
    }
    return (
        <div className='slider'>
      <h3 className='title-movie-theater'>Phim chiếu rạp</h3>
      <div className='string_product-movie'>
        {Movies.slice(currentIndex,currentIndex +6).map((item, index) => (
            <Link to={`/MovieTheaters/${encodeURIComponent(item.img)}
          /${encodeURIComponent(item.title)}
          /${encodeURIComponent(item.titleExtra)}
          /${encodeURIComponent(item.country)}
          /${encodeURIComponent(item.type)}
          /${encodeURIComponent(item.director)}
          /${encodeURIComponent(item.paramater)}
          /${encodeURIComponent(item.year)}
          /${encodeURIComponent(item.time)}
          /${encodeURIComponent(item.statuss)}`} className='link-movie' href='#none' key={index}>
            <div className='product-movie'>
              <img className='img-movie' src={item.img} alt='' />
              <span className='title-film'>{item.title}</span>
            </div>
          </Link>
        ))}

        <div className='btn'>
          <div className='btn_slider'>
            {currentIndex <= maxIndex-7 && (
              <FontAwesomeIcon className='btn_left' icon={faChevronRight} onClick={handleBtnRight} />
            )}
          </div>
          <div>
          {currentIndex >=1 && (
              <FontAwesomeIcon className='btn_right' icon={faChevronLeft} onClick={handleBtnLeft} />
              )}
          </div>
        </div>
      </div>
    </div>
    )
}

export default MovieTheaters