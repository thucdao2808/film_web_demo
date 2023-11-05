import React from 'react'
import "./Pageslider_2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import {Link} from "react-router-dom"
const PagelistSlider = ({listSliderTwo}) => {
    const listSliderTwos =[
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
            title:"one piece",
            img:"https://tse4.mm.bing.net/th?id=OIP.SYpeQIglzSOOegO5OLf9nwHaEM&pid=Api&P=0&h=220",
            
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
            title:"Naruto",
            img:"https://tse3.mm.bing.net/th?id=OIP.8kBolo6yE8Ntbf6BGcZ-hAHaEo&pid=Api&P=0&h=220",
            
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
            title:"Boruto",
            img:"https://tse1.mm.bing.net/th?id=OIP.IOwn7T0Nzv6fPzccJ3K6PgHaFj&pid=Api&P=0&h=220",
            
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
            title:"7 viên ngọc rồng",
            img:"https://tse4.mm.bing.net/th?id=OIP.SMqlplw3LmkVIpLvqmzfmgHaFj&pid=Api&P=0&h=220",
            
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
            title:"Đo Re Mon",
             img:"https://tse3.mm.bing.net/th?id=OIP.yo2WSC0ZIQBizf2bC17bwAHaFj&pid=Api&P=0&h=220",
            
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
            title:"chiếc bất lửa và váy công chúa",
            img:"https://tungtang.com.vn/blog/wp-content/uploads/2022/11/chiec-bat-lua-va-chiec-vay-cong-chua-tung-tang.jpeg",
            
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
            title:"bạch phát vương phi ",
            img:"https://static2.vieon.vn/vieplay-image/thumbnail_v4/2020/12/27/e4gb65hm_1920x1080-bachphatvuongphi5e678e457343568d17a031612929538a.jpg",
            
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
            title:"vân tịch truyện ",
            img:"https://tse1.mm.bing.net/th?id=OIP.vddn_ekY4DF8T2M_0_RJIAHaKY&pid=Api&P=0&h=220",
            
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
            title:"spiderman",
            img:"https://tse4.mm.bing.net/th?id=OIP.02_xra9QDLDvrzOLzrrrHAHaEK&pid=Api&P=0&h=220",
            
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
            title:"người Mandorian",
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
            title:"đấu phá thương khung ",
            img:"https://tse1.mm.bing.net/th?id=OIP.okamh02XxqZPVMYyjb77GQHaEL&pid=Api&P=0&h=220",
            
        },
    ]
    const [currentIndex,setCurrentIndex]= useState(0);
    const maxIndex = listSliderTwos.length;
    const handleBtnRight = () =>{
        console.log(currentIndex)
        
        setCurrentIndex(currentIndex + 1);
        
    }
    const handleBtnLeft = () =>{
        console.log(currentIndex)
        setCurrentIndex(currentIndex - 1);
    }
    const handleText =()=>{
        
        setTimeout(function() {
            
            document.getElementById("mytext").classList.add("color-eye");
          }, 10000);
        }
    return (
        <div className='slider'>
      <h3 className='color-eye' id='mytext' onChange={handleText}>Phim hoạt hình mới nhất 2023</h3>
      <div className='string_product-movie'>
        {listSliderTwos.slice(currentIndex,currentIndex +6).map((item, index) => (
            <Link to={`/Screm/${encodeURIComponent(item.img)}
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

export default PagelistSlider