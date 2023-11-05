import React from 'react'

const Active = () => {
    const ListSeriActive =[
        {
          id:"1",
          amount:"34",
          name:"thế giới dị nhân",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-NXh8JzrPKu4/ZQ0Cl4sfY9I/AAAAAAAABg4/tyGPqfduEUQNyWjnp3KkwYOHKvPsnPKZwCNcBGAsYHQ/s570/the-gioi-di-nhan.jpg",
        },
        {
          id:"2",
          amount:"26",
          name:"bánh xe thời gian",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-vqHjdBNwL5E/ZPF2Bk6aLDI/AAAAAAAAE1o/myvj_XEaHDUHd6wTKU0cywRNuIc5a3OtACNcBGAsYHQ/s520/Season_2_poster_July_12_2023.webp",
        },
        {
          id:"3",
          amount:"33",
          name:"siêu trộm luppin",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-cM9djv7-nWk/ZR5ytAsBdaI/AAAAAAAAFAc/tkCGMH1Egasp9p3TLcFZI_-BuQD2JgkowCNcBGAsYHQ/s520/dfgdg.jpg",
        },
        {
          id:"4",
          amount:"74",
          name:"vũ trụ xác sống",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-34bzbOVvHtE/ZR5h5ic4QdI/AAAAAAAAFAU/bQxUvrEGCs4-atAvW33y9d0oIJkm__vDQCNcBGAsYHQ/s520/MV5BMDhiMGEzNzEtMDUzNy00MWM1LTgwZjAtZmQ1N2FhOWY2NzM3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
        },
        {
          id:"13",
          amount:"30",
          name:"mặt trời rực rỡ bên tôi",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-RsE9_5i3ul4/ZPaqLl2DWKI/AAAAAAAAE2E/HSH62vS1waUeAn1woJ5BvOTxN5wujTtiQCNcBGAsYHQ/s520/a_100528412_m_601_vi_260_360.jpg",
        },
        {
          id:"6",
          amount:"34",
          name:"đấu sĩ Baki mùa 1",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-EQVrHqqs2yw/ZRplvQrQQGI/AAAAAAAAE_8/N9IOGwlfNmIa3pjUq7UfGFSyB7X7gO0rACNcBGAsYHQ/s520/season-1.jpg",
        },
        {
          id:"7",
          amount:"28",
          name:"bạn gái thuê phần 2",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-1ptxh7_-zgU/ZL-p48S9zHI/AAAAAAAABfw/Af40KrrYupwKSTpLDXim0P5d0Al5YNMrQCNcBGAsYHQ/s570/rent-a-girlfriend-season-3.jpg",
        },
        {
          id:"8",
          amount:"42",
          name:"huyết chiến ngàn năm",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-yG74fE9sjQc/ZNXvcH2dTaI/AAAAAAAAEvY/f5CKXBtf8koVUx60uJkwEYIQTJtVb8NaACNcBGAsYHQ/s520/1059966-bleach1-1280.jpg",
        },
        {
          id:"9",
          amount:"28",
          name:"học viện ma vương",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-TK8IX1M_CwY/Y-DC5oxA1nI/AAAAAAAAF1U/YVf1uDeDoIIiZ2ym6BFjEVjWP_1rGeiwwCNcBGAsYHQ/s16000/ChillhayNET.png",
        },
        { 
          id:"10",
          amount:"34",       
          name:"trò đùa số phận ",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://2.bp.blogspot.com/-QKipagwqRFU/XHYKHHvsUXI/AAAAAAAAEH8/ne6EeG1gfIQoFFwyryVYnBYg4Ai9vrcQgCLcBGAs/s1600/3f.jpg",
        },
        {     
          id:"11",
          amount:"36",   
          name:"hải tặc mũ rơm",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-LX3MZBc-PLI/Y-EHqcmDRlI/AAAAAAAAF24/6MAdiYF-TEQSTzcTLZt6rWNQpcLjydsQgCNcBGAsYHQ/s16000/ChillhayNET.png",
        },
        {   
          id:"12",
          amount:"43",     
          name:"người yêu dấu",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-eSM61jaHKY4/ZM5PSjBXAdI/AAAAAAAAEuA/w_zNRjsylvMokzXwY6etbwArxuDJxjw6wCNcBGAsYHQ/s520/photo1690201.jpg",
        },
        { 
          id:"13",
          amount:"32",       
          name:"yến sơn phái và bách hoa môn",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-gJhZo6GHX9E/ZNjfAMfcZ1I/AAAAAAAAEwQ/ubqsYX-LvlAE7fHYwmzz7fs3tTqbqXIBgCNcBGAsYHQ/s520/1691848701-842597-img-2023-08-11-13-13-59.jpg",
        },
        {  
          id:"14",
          amount:"29",      
          name:"cô gái mang mặt nạ",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-TIHufWekWFo/ZN89zksCTCI/AAAAAAAAExY/MdSw6pYt9qscLHUgUsiZ2uFZH7N0HR_rACNcBGAsYHQ/s520/kAozJr_4f.jpg",
        },
        {
          id:"15",
          amount:"18",        
          name:"nhịp đập trái tim",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-w2hFu2zhvEg/ZKZPP9IWXrI/AAAAAAAAEmQ/elhMA0rydIYlHAfVdHlNd9sLyyXW0dqtQCNcBGAsYHQ/s520/MV5BZTk3ZjgwMTItNDI3Yy00ZGVlLTlmZjMtZDYxMzNjZWU5ODM2XkEyXkFqcGdeQXVyNjI4NDY5ODM%2540._V1_FMjpg_UX1000_.jpg",
        },
        {
          id:"16",
          amount:"33",        
          name:"ngôi trường bí ẩn",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-M_xjRy7PZAs/ZIRdhmkDMZI/AAAAAAAAEc0/ea3UX-yXhN0g-cPpxRHApUSJBs2TPB6lwCNcBGAsYHQ/s520/home-school-1454.jpg",
        },
        {
          id:"17",
          amount:"31",        
          name:"cảnh sát vinh dự",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-9rQ_-c9IXHE/ZNdz7_rShuI/AAAAAAAAEvs/qP-PsKW0V3ks4I1UtU2i0FI-c9ChSKAngCNcBGAsYHQ/s520/sdfsfsdf.jpg",
        },
        {
          id:"18",
          amount:"51",        
          name:"hộ tâm",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-BrNja2tc6a4/ZGDinHJqUjI/AAAAAAAAER4/mIGj3afn4x83hVcY6pocs8MS4U8SVMJ4wCNcBGAsYHQ/s520/Back-From-the-Brink.jpg",
        },
        { 
          id:"19",
          amount:"38", 
          name:"thôn phệ tĩnh không",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-NAyUdDrj4z4/ZBwBY074EaI/AAAAAAAABEk/lQgxRsV4qOojHl1YTVw9t0VseK4uH-0XgCNcBGAsYHQ/s570/thon-phe-tinh-khong-tvphim-thuyet-minh.jpg",
        },
        { 
          id:"20",
          amount:"43",
          name:"vũ động càn khôn",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-e-wmZSGCMzw/XcNfeItWACI/AAAAAAAAFhY/-5fJY74HohEuXPrFnZALQPjXbsBVrc7vACLcBGAsYHQ/s1600/Dj9lKDQUYAAIWJd.jpg",
        },
        { 
          id:"21",
          amount:"43",
          name:"vinh sinh phần 1",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-HqrtcO9T8cA/ZCVEjNrHgTI/AAAAAAAABTA/AVsqJ6QMbqAoXkmj-TGUVs0Y1umxWrFlgCNcBGAsYHQ/s570/vinh-sinh-vo-tan-tien-do-tvphim-thuyet-minh.jpg",
        },
        { 
          id:"22",
          amount:"40",
          name:"tứ xuyên",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-h677KfRpC8U/ZCUDATDAykI/AAAAAAAABQI/YeGhdIRhZgAY7oN-iNA2w79mzrGBad--wCNcBGAsYHQ/s570/tu-xuyen-phan-1-tvphim-thuyet-minh.jpg",
        },
        { 
          id:"23",
          amount:"43",
          name:"hành tinh thời tiền sử",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-Dtvfz4Z47hw/ZBwDgW1sxmI/AAAAAAAABE8/PnPa723aq4YZhPWPleVgOFmA3jkVZxWfgCNcBGAsYHQ/s570/hanh-trinh-thoi-tien-su-phan-1-tvphim-thuyet-minh.jpg",
        },
        { 
          id:"24",
          amount:"43",
          name:"1899",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-JDHiYXa6VWs/ZCEQ_1ScnEI/AAAAAAAABLY/vHfCVKOGJdMtv-CbKenuzeJmQITZPdHGACNcBGAsYHQ/s570/1899-2022-tvphim-thuyet-minh.jpg",
        },
    ]
    const handleTextFlick = () => {
        setTimeout(() => {
            document.getElementById("Flick-color").classList.add("name-tv-series");
        },5000);
    }
    const handleTextFlickAmount = () =>{
        setTimeout(() =>{
            document.getElementById("amount-color-flick").classList.add("amount-film")
        })
    }
    return (
        <div>
            <h2 className='name-tv-series' id='Flick-color' onChange={handleTextFlick}> Phim mới</h2>
            <div className='render-list-series-film'>
                {ListSeriActive.map((item,index) =>(
                    <div className='blog-film' key={index}> 
                       <img className='photo-series' alt='movie' src={item.img}/>
                       <span className='amount-film' id='amount-color-flick' onChange={handleTextFlickAmount}> {item.amount}/{item.amount}Tập</span>
                       <h5 className='title-tv-series'>{item.name}</h5>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Active