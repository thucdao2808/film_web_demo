import React from 'react'
import "./FilmAnime.css"
import { Link } from 'react-router-dom'
const FilmAnime= () => {
    const ListAnimes=[
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
            title:"thiếu niên ca hành",
            img:"https://tse3.mm.bing.net/th?id=OIP.-caswCPW2LP8DHqZsYs9rgHaEK&pid=Api&P=0&h=220",
            src:"",
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
            title:"trường tương phủ",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-V56wPwA_IVQ/XsFHitWDORI/AAAAAAAAHG8/BlKUkf29FBIxtJJJpDzKa4agIBr2OMc0QCLcBGAsYHQ/s1600/321324654.jpg",
            src:"#none",
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
            title:"nguyệt thượng trọng hỏa",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://4.bp.blogspot.com/-4poTDA3-XKE/XtCHxSQTnUI/AAAAAAAAHNo/7uPq78agAv872aNJKEnIyCDWpjT7HhtJgCLcBGAsYHQ/s1600/124125.jpg",
            src:"#none",
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
            title:"em là định mệnh đời anh",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://2.bp.blogspot.com/-fjRi8kSMj4k/Xt-Stma_WxI/AAAAAAAAHWY/NR2hobBHdzwLe7XEvYPMj0e4FUGOqC24gCLcBGAsYHQ/s1600/24sdg.jpg",
            src:"#none",
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
            title:"trùng tử",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-HSC2jWxj_Us/Y_TVano8QhI/AAAAAAAAA70/3A2q9Pa1vD0WvEVH4yEN_huc1IAq17F1ACNcBGAsYHQ/s500/trung-tu-tvphim.us.jpg",
            src:"#none",
        },
      
   
        
    ]
const handleText =()=>{        
setTimeout(function() {
    document.getElementById("myText").classList.add("single");
  }, 8000);
  }
    return (
        <div className='film-anime'>
            <h4 className='single' id='myText' onChange={handleText}>Phim đã hoàn thành </h4>
      <div className='Movie-single'>
        {ListAnimes.map((item, index) => (
          <Link to={`/UniqueFairyTale/${encodeURIComponent(item.img)}
          /${encodeURIComponent(item.title)}
          /${encodeURIComponent(item.titleExtra)}
          /${encodeURIComponent(item.country)}
          /${encodeURIComponent(item.type)}
          /${encodeURIComponent(item.director)}
          /${encodeURIComponent(item.paramater)}
          /${encodeURIComponent(item.year)}
          /${encodeURIComponent(item.time)}
          /${encodeURIComponent(item.statuss)}`
          } className='cate-link-movie' key={index}>
            <div className='cate-product-movie'>
              <img className='cate-img-movie' src={item.img} alt='' />
              <span className='cate-title-film'>{item.title}</span>
            </div>
          </Link>
        ))}
        </div>
        </div>
    )
}

export default FilmAnime
