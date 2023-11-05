import React, { useState,useEffect } from 'react'
import "./ListFilm.css"
import { Link } from 'react-router-dom'
const ListFilm = ({ListFilm }) => {
    const ListFilms=[
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
            title:"người Mandorian",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-9q1boI4QEH0/YFDH1ThV7TI/AAAAAAAADeo/3NoSnbE8xBMpXn25nlsT0D_ugZxgwu56QCLcBGAsYHQ/w270-h400/the-mandalorian-season-2-poster-692x1024.jpeg",
            
        },
        {
            id:"2",
            statuss:"đã kết thúc", 
            year:"2023",
            type:"Phim Hành Động, Phim Kinh Dị", 
            time:" 122 phút",    
            paramater:"ack Champion, Jasmin Savoy Brown, Melissa Barrera",
            country:"Phim Mỹ",
            times:"1 tập",
            director:"Matt Bettinelli-Olpin",
            titleExtra:"",    
            title:"Tiếng thét 6",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-SUpBeDLON6w/ZRrWnFCkhwI/AAAAAAAAGcE/1547zNu9guQDQRl98yXcLCQvESTq016tACNcBGAsYHQ/s16000/81zPtUUduML._AC_UF1000%252C1000_QL80_.jpg",
            
        },
        {
            id:"3",
            statuss:"đã kết thúc", 
            year:"2023",
            type:"phim cổ trang ,phim hành ddoogj ", 
            time:"148 phút",   
            paramater:"layout, passenger",
            country:"trung quốcphim pháp",
            times:"1 tập",
            director:"ô nhĩ thiện luffy,nmai,ussop",
            titleExtra:"CREATION OF THE GODS I: THE WHITE STORM 3: HEAVEN OR HELL (2023)KINGDOM OF STORMS (2023)",     
            title:"Phong thần 1:Tam Bộ Khúc",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-XH9Y3cKys0Y/ZRhplvcEqeI/AAAAAAAAGbg/5wjqXJkc_lE3KktKfym13dHRJuc2SjzXQCNcBGAsYHQ/s16000/image.jpg",
            
        },
        {
            id:"4",
            statuss:"đã kết thúc", 
            year:"2023",
            type:"phim hài , phim tâm lý", 
            time:" 8 tập",     
            paramater:": Asa Butterfield, Gillian Anderson, Ncuti Gatwa",
            country:"phim mỹ",
            times:"1 tập",
            director:" Laurie Nunn",
            titleExtra:"SEX EDUCATION SEASON 4 (2023)",    
             title:"Giáo dục giới tính màu 4",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-qjTLI5lldHQ/ZQw6lucY4xI/AAAAAAAAE7g/1Mz_YNyOdVIA0usThUbb2IK-OPQfuTDPgCNcBGAsYHQ/s520/Sex_Education_Final_Season_Poster.webp",
            
        },
        {
            id:"5",
            statuss:"đã kết thúc",
            year:"2022",
            type:": Phim Hành Động, Phim Phiêu Lưu, Phim Tình Cảm",
            time:"122 phút",
            paramater:" Ahn Suk Hwan, Cho Byeong Kyu, Kim Se-Jeong, Yeom Hye-ran, Yoo Joon Sang",
            country:"phim hàn quốc",
            times:"1 tập",
            director:"Yoo Seon Dong",
            titleExtra:"THE UNCANNY COUNTER S02 (202)",
            title:"Nghệ thuật săn quỷ và nấu mì",
             img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-SOttn7Sxjhg/ZMcpwgHAh-I/AAAAAAAAEsY/rVro2xqKNiEz4Q254h5-LQi8gUYLS-KYgCNcBGAsYHQ/s520/adasdasd.jpg",
            
         },
        {
            id:"6",
            statuss:"đã kết thúc",
            year:"2023",
            type:"Phim Hành Động",
            time:"132 phút",
            paramater:"Kim Nam Gil, Seo Hyun, Yu Jae Myung",
            country:"hàn quốc",
            director:": Han Jung Hoon",
            titleExtra:"SONG OF THE BANDITS (2023)",
            title:"Bài ca của lười kiếm",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-KQu0HUOrUHg/ZQ1bFyC0hAI/AAAAAAAAE7s/lzVrARTKtGAkPUn5p16d-D0wQpMC5RwQwCNcBGAsYHQ/s520/Song_of_the_Bandits-p2.jpg",
            
        },
        {
            id:"7",
            statuss:"đã kết thúc",
            year:"2023",
            type:"phim hành ddoognj , phim phiêu lưu",
            time:" 90 phút",
            paramater:"thức",
            country:"phim mỹ",
            times:"1 tập",
            director:"",
            titleExtra:"SPY KIDS: ARMAGEDDON (2023)",
            title:"Ngày tận thế",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-q2IohWSVDgk/ZQ1025zVldI/AAAAAAAAE74/8X6EhjJqbDwqtXS3V8StopvRfFjUqqogwCNcBGAsYHQ/s520/57t6o5emdopdpQ76LJWexBOa6Y2.jpg",
            
        },
        {
            id:"8",
            statuss:"đã kết thúc",
            year:"2023",
            type:"phim tâm lí , tình cảm",
            time:"24 phút",
            paramater:"Hách Châu Vũ, Hùng Áo Bác, Lữ Chiêu, Trương Miểu Di, Văn Tuấn Huy",
            country:"phim trung quốc",
            times:"1 tập",
            director:"cung vũ thi",
            titleExtra:"EXCLUSIVE FAIRYTALE (2023)",
            title:"Đồng thoại độc nhất",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-T9DClhZgKnI/ZN78Hz6zR2I/AAAAAAAABgY/d1XxEkyHC9QEPTMKPfPhZX0ZSP8m1owAgCNcBGAsYHQ/s570/dong-thoai-doc-nhat.jpg.png",
            
        },
        {
            id:"9",
            statuss:"đã kết thúc",
            year:"2023",
            type:"phim tình cảm ",
            time:"124 phút",
            paramater:"hamter",
            country:"phim nhật bản ",
            times:"1 tập",
            director:"alexander thức",
            titleExtra:"",
            title:"Ngọt đắng cuộc đời ",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-58iTAEYRWmc/ZQa805uYGXI/AAAAAAAAGaQ/exS6Jb38rKILqUuUeRvj6zApPKf2UmCPgCNcBGAsYHQ/s16000/A_Bittersweet_Life_Poster.jpg",
            
        },
        {
            id:"10",
            statuss:"đã kết thúc",
            year:"2021",
            type:"phim hành đọngo ",
            time:"50 phút",
            paramater:"ten hag",
            country:" phim anh",
            times:"1 tập",
            director:"ronando",
            titleExtra:"macus alonso",
            title:"thiên đàng hay địa ngục",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-vM8n8DsgYCQ/ZP28hL0ddbI/AAAAAAAAGZ8/iLMIkVIBM4wackDxEBj-LEd54o10YB3oQCNcBGAsYHQ/s16000/official_posterfb.jpg",
            
        },
        {
            id:"11",
            statuss:"đã kết thúc",
            year:"2019",
            type:"phim hoạt hình",
            time:"24 phút",
            paramater:"châu tinh trì",
            country:"phm nhật bản ",
            times:"1 tập",
            director:"alex firguson",
            titleExtra:"thousen",
            title:"Luyện Khí Mười Vạn Năm",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-6iBM3JzPtHM/ZMiC9KxiQxI/AAAAAAAAGQ8/kkn7mDeRRq4n-0K-T_ZsaY64sRsEVmYUACNcBGAsYHQ/s16000/luyenKhi.jpg",
            
        },
        {
            id:"12",
            statuss:"đã kết thúc",
            year:"2018",
            type:"phim đối kháng",
            time:"39 phút",
            paramater:"layout, passenger",
            country:"phim trung quốcphim pháp",
            times:"1 tập",
            director:"paul pogbaluffy,nmai,ussop",
            titleExtra:"free fireTHE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Hỏa Phụng Liêu Nguyên",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-DZmzpQAB-Pw/ZMp3uWBuSvI/AAAAAAAAGRY/inBmRRZTDswYA8wwnmqVvqKRB09_l5shwCNcBGAsYHQ/s16000/X1000_.jpg",
            
        },
        {
            id:"13",
            statuss:"đã kết thúc",
            year:"2014",
            type:"phim trung quốc",
            time:"35 phút",
            paramater:" verati,leao",
            country:"phim anh",
            times:"1 tập",
            director:"konate",
            titleExtra:"focus-opensocial.",
            title:"Nghịch Thiên Chiến Kỉ",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-0O19vfBTMR4/ZEik-XZJQ6I/AAAAAAAAEEU/dc6kroi-lwM-slPiAm-2UVc1SLXEFlUowCNcBGAsYHQ/s520/nghich-thien-chien-ky-2023-tvphim.jpg",
            
        },
        {
            id:"14",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Xóa Bỏ",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-miWfwNJVw-Q/ZJ0IeLYZmXI/AAAAAAAAEhA/b04fe9l0yUgGo1ty1AhY4cubSTDK8ADlACNcBGAsYHQ/s520/xb.jpg",
            
        },
        {
            id:"15",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Cái Chết Của Bảy Vị Vua",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-q3qb6f7InoE/ZRB5MpCvc3I/AAAAAAAAGbE/6J5iv6mL2Ng81yzL8k_5DYR6APJGa7t8wCNcBGAsYHQ/s16000/aaa.jpg",
            
        },
        {
            id:"16",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Âm mưu của quỷ ",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-IUzaGNvqnbY/ZQb49q3uCgI/AAAAAAAAGaY/nx9QeyJEzvcw5e-V0O3TtJXT9DP9o3yAgCNcBGAsYHQ/s16000/dea.jpg",
            
        },
        {
            id:"17",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Truyền Nhân Ma Cà Rồng",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-QQF57aQrW_8/ZODZNXEEh_I/AAAAAAAAGXQ/0UE2VxXnHbgZMqef86XeU5Y9ehYJ5MWmACNcBGAsYHQ/s16000/Dampyr_film_poster.jpg",
            
        },
        {
            id:"18",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Điệp vụ Đoạt Hồn",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-TK_K4WYgJBg/ZOuhE6dQAsI/AAAAAAAAGYA/NWMhnUAaU2EkyU3wQZp4qUJHU_4gG_CZwCNcBGAsYHQ/s16000/p25270455_v_v9_ac.jpg",
            
        },
        {
            id:"19",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Cá mập bạo chúa 2",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/--sAxSkt0ZWg/ZPFDo-hehXI/AAAAAAAAGYc/ntztD7XMBSI242no8D5nVth99-svHBv2wCNcBGAsYHQ/s16000/output_image.png",
            
        },
        {
            id:"20",
            statuss:"đã kết thúc",
            year:"2015",
            type:"phim đấu tường",
            time:"54 phút",
            paramater:"layout, passenger",
            country:"phim pháp",
            times:"1 tập",
            director:"luffy,nmai,ussop",
            titleExtra:"THE WHITE STORM 3: HEAVEN OR HELL (2023)",
            title:"Thời trung cổ ",
            img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-Yj58lmvcIHc/ZPKQxlv3GcI/AAAAAAAAGYk/eKiVdQrdVHgutnk9Wwp64NK-sjJEwuCGQCNcBGAsYHQ/s16000/ttc.jpg",
            
        },
    ]
    const handleTextFlickAmount = () =>{
        setTimeout(() =>{
            document.getElementById("amount-color-flick").classList.add("amount-film")
        })
    }

    return (
        <div className='combine_list_movie'>
      <div className='title_and_viewer'>
        <h3 className='title-movie-theater'>Phim mới</h3>
        <span className='view_add'>
          <a href='#none'>Xem thêm</a>
        </span>
      </div>
      <div className='cate-string_product-movie'>
        {ListFilms.map((item, index) => (
          <Link to={`/mandolian/${encodeURIComponent(item.img)}
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
              <img className='cate-img-movie' src={item.img} alt=''/>
              <h5 className='cate-title-film'>{item.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListFilm