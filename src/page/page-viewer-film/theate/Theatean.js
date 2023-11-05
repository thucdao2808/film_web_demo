import React from 'react'

const Theatean = () => {
    const ListFilmTheaten =[
        {
          id:"1",
          amount:"34",
          name:"cuộc chạy trốn sinh tử",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://3.bp.blogspot.com/-rWiTlm9pVys/XlJQY_y0X6I/AAAAAAAAGbs/OONacx8w58kidIZtwiGVL5_uwC29rQNEgCLcBGAsYHQ/s1600/712AqyOHa9L._AC_SY741_.jpg",
        },
        {
          id:"2",
          amount:"26",
          name:"cuộc chiến không hồi kết",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-SRe7Ee-aj_M/XhWb7AGkFhI/AAAAAAAAF_U/fcLbsNOj5EQj0-pW7iZUX-eL2enCZKh8gCLcBGAsYHQ/s1600/231234.jpg",
        },
        {
          id:"3",
          amount:"33",
          name:"cậu bé mất tích",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-GN21OI1dUxw/X_1nNPG7YII/AAAAAAAAJpo/waxM9hGPXCIG-rz7v7q1IVmLaiwTrFDXwCLcBGAsYHQ/s1200/81QDU13hAAL._AC_SL1200_.jpg",
        },
        {
          id:"4",
          amount:"74",
          name:"tàn sát",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://3.bp.blogspot.com/-By3Ho1Y_nYM/XGpJb7wID3I/AAAAAAAAEC0/G1HSvD0mP8glzuWzxYa1jj69ojtJ-obbwCLcBGAs/s1600/1111111111.jpg",
        },
        {
          id:"13",
          amount:"30",
          name:"chàng trai Billy",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://3.bp.blogspot.com/-cC0fPgSQ4u4/XFQDZB0C0AI/AAAAAAAAD7Q/SeFWvmS4iL48rYHOWCHyFlEQk4-A3-zYACLcBGAs/s1600/11111.jpg",
        },
        {
          id:"6",
          amount:"34",
          name:"Dave tạo ra mê cung",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-6GuBl90JRVQ/XFZu34Im7yI/AAAAAAAAD8A/PcTugYpTB50zehBR5-OLQ_wqIZnJsJgcgCLcBGAs/s1600/12312.jpg",
        },
        {
          id:"7",
          amount:"28",
          name:"đại dịch xác sống",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://3.bp.blogspot.com/-R6Z-M-kza2g/WdcQFq0okVI/AAAAAAAASCM/7IR5I7tsGSYum82Luz0VV6jK1bfQ009sgCLcBGAs/s1600/dai-dich-zombie-tvhay.org.jpg",
        },
        {
          id:"8",
          amount:"42",
          name:"ra khỏi bóng tối",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-5_tF9u9HyNI/XEvizO12PyI/AAAAAAAAD28/KhYfPpUUhE4vO1l0ozCezYoi3-17UVNRwCLcBGAs/s1600/101FILMS298_out_of_the_shadows_2D_2400x.jpg",
        },
        {
          id:"9",
          amount:"28",
          name:"hồn ma và cá voi",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://4.bp.blogspot.com/-sMJEUOCoq4M/XFhc6SNE0kI/AAAAAAAAD9g/LB77Oup-0ggM1xSpyMxlaD47jughj5ZJACLcBGAs/s1600/123324234.jpg",
        },
        { 
          id:"10",
          amount:"34",       
          name:"trao đổi ái tình ",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://4.bp.blogspot.com/-Ndq0GCOzW1s/XYw9hFN6d6I/AAAAAAAAFTc/3AiJQqkwUJQso4iXKfGijTGBqff11R1TwCLcBGAsYHQ/s1600/3264.jpg",
        },
        {     
          id:"11",
          amount:"36",   
          name:"khế ước",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-QfQHc1buQyA/ZJOWZF8LqUI/AAAAAAAAGLo/XXjXNIvaX6cZFospcDlAwxo1OrR9dq1xQCNcBGAsYHQ/s16000/TheCovenantPoster.png",
        },
        {   
          id:"12",
          amount:"43",     
          name:"chiến thần phương bắc",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-OPQbvnt9xxc/YpSrcxM5vxI/AAAAAAAAFOA/cQ8knUKcL5At46dAUc55NQf07t6nvZ0fQCNcBGAsYHQ/s16000/CTPB.png",
        },
        { 
          id:"13",
          amount:"32",       
          name:"tái thế yêu vương",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-NvSQnvFEKYQ/YdzlHBjOvII/AAAAAAAAEs8/8MpfsB4guPI8ZR6EWLhUqw8u_MeWuC1_QCNcBGAsYHQ/s16000/yeuVuong.png",
        },
        {  
          id:"14",
          amount:"29",      
          name:"nguyên long",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-HXoMih3_Wcg/YPhCCC-17BI/AAAAAAAAECI/2sx4sMMysNg2vbvgq9w9rsk-8L-QGTn8gCLcBGAsYHQ/w286-h400/211018115_1230228457404755_2177554881996519556_n.jpg",
        },
        {
          id:"15",
          amount:"18",        
          name:"bách luyện thành thần",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-_hCAHSKkD9I/ZM9Sx0zrCuI/AAAAAAAAGR4/nQ6uZO0rqHQ_xP_53Zqx4o_5F9WQYdJ7QCNcBGAsYHQ/s16000/B%25C3%25A1ch%2BLuy%25E1%25BB%2587n%2BTh%25C3%25A0nh%2BTh%25E1%25BA%25A7n.jpg",
        },
        {
          id:"16",
          amount:"33",        
          name:"hàn long giáng thế",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-6W_Ik2AgMRc/YcML4bOCTbI/AAAAAAAAEpM/WpVdyZ6afdU3IQFiH3lE48DXqmOvJpGZQCNcBGAsYHQ/s16000/teCong.png",
        },
        {
          id:"17",
          amount:"31",        
          name:"tuyết ưng lãnh chủ",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-4fXF8nYksuw/YrV0XwyBVzI/AAAAAAAAFRc/0AcTrVrnEbYzaJJUsLDGJ4dPTJvEBMSswCNcBGAsYHQ/s16000/TuyetUngLinhChuP3.png",
        },
        {
          id:"18",
          amount:"51",        
          name:"đảo tử thần",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-eSLT9w7ZqE0/ZM8s0SqbUmI/AAAAAAAAGRw/XuIxRaSTVLgQ0qYkmtCn-Xn5w-SP0cPWQCNcBGAsYHQ/s16000/aa.jpg",
        },
        { 
          id:"19",
          amount:"38", 
          name:"cửa đổ vô định",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-svBfC003rvg/ZNlmEgoqw7I/AAAAAAAAGU4/Cz-F-9rR6_Q2jayp5k8ZhSkqAcZIn_2FACNcBGAsYHQ/s16000/quyquyet.jpg",
        },
        { 
          id:"20",
          amount:"43",
          name:"1923",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-bMK4u1nwebU/ZKK1LQ7909I/AAAAAAAAGM0/F0zLlIp-nN4S3M70rXOj9am7_w0bEQonwCNcBGAsYHQ/s16000/1234.jpg",
        },
        { 
          id:"21",
          amount:"43",
          name:"sinh vật huyền thoại",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-xW1A85scxgs/ZJgWUcCKI0I/AAAAAAAAGMA/PqOBuHUaDU4fbcoIvW0XmOL-CAbiI8tOwCNcBGAsYHQ/s16000/123.png",
        },
        { 
          id:"22",
          amount:"40",
          name:"cuộc xâm lăng bí ẩn",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-4G9muVgOP9w/ZKYOxYQlmQI/AAAAAAAAGM8/l3u8UiUnXdgx8cxXFOrASUb2VblMlGlpQCNcBGAsYHQ/s16000/64931cbaefc0e.jpg",
        },
        { 
          id:"23",
          amount:"43",
          name:"mắt diều hâu",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-9wheBSxlEk8/YaDETt4pUBI/AAAAAAAAEjo/kDd_YFwhDgcnbHme8vmuzb-dF-QIOMaIQCLcBGAsYHQ/s16000/1.png",
        },
        { 
          id:"24",
          amount:"43",
          name:"Argentina năm 1985",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-jmT8k7gB9pA/ZMeg3LEgyqI/AAAAAAAAGQU/AcTEi48iHXkPdYrwpW6-yDESki9tJvGzwCNcBGAsYHQ/s16000/Argentina_1985.jpg",
        },
        { 
          id:"25",
          amount:"26",
          name:"hành tinh của chúng ta",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-qdnqQ9lbkLc/XLsyOW02nGI/AAAAAAAAVM8/ZBtV_8o80Bc2jr9023XaCBd2jLBZMdEMACLcBGAs/s400/hanh-trinh-cua-chung-ta.jpg",
        },
        { 
          id:"26",
          amount:"37",
          name:"phi vụ triệu đô",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-PdcBOU1uXsQ/YThrrWKrgMI/AAAAAAAAEO4/giTSSnWDbxAo3bZmP2p4diLEfP3lCDSogCLcBGAsYHQ/w330-h400/trieudo5.jpg",
        },
        { 
          id:"27",
          amount:"29",
          name:"thủy chiến đảo Hasan",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-6mWSccc9iW8/Y0GZ7gkh4cI/AAAAAAAAFkA/UDDM7AbVbDM0jTKkRLpcp9RQfzQ24k0MACNcBGAsYHQ/s16000/RongTroiDay.png",
        },
        { 
          id:"28",
          amount:"23",
          name:"thành phố chết",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-jNdLe8c3Wfc/ZS3KM_ftw2I/AAAAAAAAGeg/5CxxzbRD7EEe7fDt2bVG0pkRcWjBOWM2wCNcBGAsYHQ/s16000/thanhphochet.jpg",
        },
        { 
          id:"29",
          amount:"33",
          name:"thời đại của ta",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-9fRoteFQNqY/ZPvSEvAKtAI/AAAAAAAAGZE/J8qCnKPWGeEgZPCJ8im9DAlUCJ-UhhVKQCNcBGAsYHQ/s16000/tdct.jpg",
        },
        { 
          id:"30",
          amount:"47",
          name:"Họa giang hồ chi bất lương",
          img:"https://mp-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=604800&url=https://1.bp.blogspot.com/-Dea43E3Hz5Y/ZE-OjrV2P0I/AAAAAAAAGE0/MDw4JdqWHWk5BTwVb22auy9HqITQ_I6fACNcBGAsYHQ/s16000/painting-rivers-and-lakes-6.png",
        },
    ];
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
                {ListFilmTheaten.map((item,index) =>(
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

export default Theatean