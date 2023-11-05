import React from 'react'

const MovieSingleOdd = () => {
  const ListSeriMovie =[
    {
      id:"1",
      amount:"34",
      name:"lính hao truy sát",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-OvBVLpFdX7Q/ZS_rt_mNZpI/AAAAAAAAGgA/QLUz6Nmm3X4PA3g7mLxe30nduwAGJO_uQCNcBGAsYHQ/s16000/linhhaotruysat.jpg",
    },
    {
      id:"2",
      amount:"26",
      name:"xác sống thành phố chết",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-jNdLe8c3Wfc/ZS3KM_ftw2I/AAAAAAAAGeg/5CxxzbRD7EEe7fDt2bVG0pkRcWjBOWM2wCNcBGAsYHQ/s16000/thanhphochet.jpg",
    },
    {
      id:"3",
      amount:"33",
      name:"the flash 2023",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-pi6NjszoFg0/ZMx8SBGM1cI/AAAAAAAAGRg/KxG_Jw8-uNMsD_mrilqwdv2VbhxgzBsOQCNcBGAsYHQ/s16000/the-flash.jpeg",
    },
    {
      id:"4",
      amount:"74",
      name:"cửa đỏ vô định",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-svBfC003rvg/ZNlmEgoqw7I/AAAAAAAAGU4/Cz-F-9rR6_Q2jayp5k8ZhSkqAcZIn_2FACNcBGAsYHQ/s16000/quyquyet.jpg",
    },
    {
      id:"13",
      amount:"30",
      name:"đặc vụ AKA",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-RsE9_5i3ul4/ZPaqLl2DWKI/AAAAAAAAE2E/HSH62vS1waUeAn1woJ5BvOTxN5wujTtiQCNcBGAsYHQ/s520/a_100528412_m_601_vi_260_360.jpg",
    },
    {
      id:"6",
      amount:"34",
      name:"vùng đất quỷ dữ",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-EQVrHqqs2yw/ZRplvQrQQGI/AAAAAAAAE_8/N9IOGwlfNmIa3pjUq7UfGFSyB7X7gO0rACNcBGAsYHQ/s520/season-1.jpg",
    },
    {
      id:"7",
      amount:"28",
      name:"nàng tiên cá",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-xLC6nW2_qWI/ZM4ttaOnVbI/AAAAAAAAGRo/9N2dcgwYSpYV1ZJ9Ws_zFYqasjzsq-rGQCNcBGAsYHQ/s16000/nangtienca.jpg",
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
      name:"cuộc xâm lăng bí ẩn",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-4G9muVgOP9w/ZKYOxYQlmQI/AAAAAAAAGM8/l3u8UiUnXdgx8cxXFOrASUb2VblMlGlpQCNcBGAsYHQ/s16000/64931cbaefc0e.jpg",
    },
    { 
      id:"10",
      amount:"34",       
      name:"quái thú trỗi dậy ",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-yqZWqVeJ3qM/ZLK4hcbdU8I/AAAAAAAAGN4/vWQWFcg6BOMQ5cL2w3utXwHIG5HEAR9aQCNcBGAsYHQ/s16000/700x1000_.jpg",
    },
    {     
      id:"11",
      amount:"36",   
      name:"thợ săn quái vật",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-PTcbXrXPub8/ZJ1hTqLJ1pI/AAAAAAAAEhI/XlsICH7VfEAyVustLV2a9UP3Ot8yV__lgCNcBGAsYHQ/s520/en-us-thewitchers3-main-vertical-rgb-pre-1682419706563.jpg",
    },
    {   
      id:"12",
      amount:"43",     
      name:"hiệp sĩ hoàng đạo",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-5zVM7w_s-Kk/ZKGKusEQaAI/AAAAAAAAGMs/D62ppNFAKZYrpTv4O8tmXizEFDwEjn90QCNcBGAsYHQ/s16000/123.jpg",
    },
    { 
      id:"13",
      amount:"32",       
      name:"người mẹ",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-Cci6jOLJuTk/ZJ-0XfBpy9I/AAAAAAAAGMc/uLCMG69bVF4kKGRwhmr9yJNET7RHAdbgACNcBGAsYHQ/s16000/The_Mother_poster.jpg",
    },
    {  
      id:"14",
      amount:"29",      
      name:"tay sai của quỷ",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-AUbPDI84H10/ZH__IZJl_MI/AAAAAAAAGIs/pYXFITXWnh40LMN4AZNhRiHe6Fr3JHcWQCNcBGAsYHQ/s16000/NgucToiVaRong.jpg",
    },
    {
      id:"15",
      amount:"18",        
      name:"lưu lạc địa cầu",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-VSOmwi3g2v4/ZFRWjn0kHTI/AAAAAAAAGFg/KYeU0DosDegfSffxc-OGT3gLINPz8CfCwCNcBGAsYHQ/s16000/28lVO_4c.jpg",
    },
    {
      id:"16",
      amount:"33",        
      name:"ám ảnh ma thành",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-F-OSIyf9prs/ZEe8r_iZVeI/AAAAAAAAEEA/5T2d-sZF7OoOo-Aklv1hpAg3gFyL9Df_QCNcBGAsYHQ/s520/tay-hanh-ky-am-anh-ma-thanh-300x450.jpg",
    },
    {
      id:"17",
      amount:"31",        
      name:"chiến thần Pathan",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-ns0WT2yzvgc/ZEShy9BlVsI/AAAAAAAAGDM/7T7JEIdsFJA49j4t8gkC5lUUK480CAfnwCNcBGAsYHQ/s16000/pathan-poster-10.jpg",
    },
    {
      id:"18",
      amount:"51",        
      name:"tay đấm điện thoại",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-Ar2j4bgQ9r8/ZFfJCz0LUdI/AAAAAAAAGFs/r_3tumoV1twQp0x9_j0z97I-FLNuoFduACNcBGAsYHQ/s16000/poster_creed.jpg",
    },
    { 
      id:"19",
      amount:"38", 
      name:"biệt tích",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-F8Tk0HI2WDs/ZE0l8l5kRxI/AAAAAAAAGEQ/AuZdRlhNC60NiTyb9G3iSFUtBuOlhsaXACNcBGAsYHQ/s16000/12.jpg",
    },
    { 
      id:"20",
      amount:"43",
      name:"mèo báo siêu đẳng",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-0ZXM9juvX2o/ZEyI6mWfSuI/AAAAAAAAEF8/2n41pd2KO3gyC7CopMe2Y3rvPB8axfSjwCNcBGAsYHQ/s520/poster_tam.jpg",
    },
    { 
      id:"21",
      amount:"43",
      name:"những con chó của địa ngục",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-HqrtcO9T8cA/ZCVEjNrHgTI/AAAAAAAABTA/AVsqJ6QMbqAoXkmj-TGUVs0Y1umxWrFlgCNcBGAsYHQ/s570/vinh-sinh-vo-tan-tien-do-tvphim-thuyet-minh.jpg",
    },
    { 
      id:"22",
      amount:"40",
      name:"vệ binh dải ngân hàng",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://lh3.googleusercontent.com/-h677KfRpC8U/ZCUDATDAykI/AAAAAAAABQI/YeGhdIRhZgAY7oN-iNA2w79mzrGBad--wCNcBGAsYHQ/s570/tu-xuyen-phan-1-tvphim-thuyet-minh.jpg",
    },
    { 
      id:"23",
      amount:"43",
      name:"bác sĩ trung quốc",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-MOOg1OoUvaA/Ye1Y8yG5ioI/AAAAAAAAEvs/T8Pv0W56-GAo1466_2AkA-ybIAbnFW4MACNcBGAsYHQ/s16000/bacSi.png",
    },
    { 
      id:"24",
      amount:"43",
      name:"ỷ thiên đồ long kí",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-JtEym2RURvA/YhIso22kxxI/AAAAAAAAE5Q/UuZr8VZ00fMPj9ydN-QyBRKjIDWPBvXCQCNcBGAsYHQ/s16000/cuuDuongThanCong.png",
    },
    { 
      id:"25",
      amount:"26",
      name:"vua bắn tỉa",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-MLxwwAeDGe8/YgUpK7IXzaI/AAAAAAAAE2A/S1olRYgunx0vCkfSY6XSwGhSvgwoUJdNgCNcBGAsYHQ/s16000/vuaBanTia.png",
    },
    { 
      id:"26",
      amount:"37",
      name:"Người nhện: không còn nhà",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-2kQ2dOmvVwQ/YfXP1wx5zhI/AAAAAAAAExI/pV83-QMytO0ma9GUZxAqqs21-81GVBnSgCNcBGAsYHQ/s16000/SpiderMan.png",
    },
    { 
      id:"27",
      amount:"29",
      name:"trận chiến ở Navirk",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-G-jMZXWBDFk/ZDLP2V3EmjI/AAAAAAAAGB4/gVKm24yYQWQ9La_CsBA9YvW5TfqSUT_iQCNcBGAsYHQ/s16000/222.jpg",
    },
    { 
      id:"28",
      amount:"23",
      name:"Vạch trần sự thật",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-_BM61t-b4ws/Ymzj83zKldI/AAAAAAAAFKY/hYu54iXe4wABzwvxykWP9GdGcuzFoLBSgCNcBGAsYHQ/s16000/poster_batman-1.jpg",
    },
    { 
      id:"29",
      amount:"33",
      name:"lạc thiên hoang",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-D2evEz1kGNE/ZC_qmm2B4lI/AAAAAAAAD7s/5VyqX2pWj-we7OvsP62veTXz1p_xclMzACNcBGAsYHQ/s520/v-171345001-m-601-zh-CN-m1-780-1080.jpg",
    },
    { 
      id:"30",
      amount:"47",
      name:"độc cô thiên hạ",
      img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-bP6ng1rtpsw/ZDDcCKo5b_I/AAAAAAAAD74/kA46g149zy8gALJ_7QiRPVV-y6X7ZwWcQCNcBGAsYHQ/s570/dcth1.jpg",
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
    <div className='list-TvSeries'>
        <h2 className='name-tv-series' id='Flick-color' onChange={handleTextFlick}> Phim lẻ</h2>
        <div className='render-list-series-film'>
            {ListSeriMovie.map((item,index) =>(
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

export default MovieSingleOdd