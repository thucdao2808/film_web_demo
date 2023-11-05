import React from 'react'
import "./UniqueFairyTale.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faCirclePlay  } from '@fortawesome/free-solid-svg-icons';
import YourComponent from '../../pageFirst/ListFilm/SelectMusic';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const UniqueFairyTale = ({listVideo}) => {
  const { img,title,titleExtra,year,paramater,time,type,statuss,country,src} = useParams();
  const ListVideos=[
    {
      id:'1',
      names:"thuc",
      src:"https://vimeo.com/23367146",
    },
    {
      id:'6',
      names:"thuc",
      src:"https://vimeo.com/145218574",
    },
    {
      id:'2',
      names:"thuc",
      src:"https://vimeo.com/709369861",
    },
    {
      id:'3',
      names:"thuc",
      src:"https://vimeo.com/644494272",
    },
    {
      id:'4',
      names:"thuc",
      src:"https://vimeo.com/386702824",
    },
    {
      id:'5',
      names:"thuc",
      src:"https://vimeo.com/83409369",
    },
   
  ]
    return (
        <div>
          <div className='separate'>
          <div className='demo-UniqueFairyTale' >
               <div className='gallery-UniqueFairyTale'>
                <img  className='img-UniqueFairyTale' alt='' src={decodeURIComponent(img)}>
                    
                </img>
                   <div className='selection-dowl-view'>
                    <span className='dowload'>
                       <FontAwesomeIcon icon={faArrowDown} />
                         Tải phim
                    </span>
                    <span className='views-film-UniqueFairyTale'>
       
          <span >
            <FontAwesomeIcon icon={faCirclePlay} />
            <Link to={`/video/${encodeURIComponent(src)}`}>
                xem phim
            </Link>
          </span>
      </span>

                  </div>
              </div>
              <div className='intro_part-film'>
              <div className='content-film-UniqueFairyTale'>
                  <h3 className='title-film-UniqueFairyTale'>{decodeURIComponent(title)}</h3>
                  <span className='title-extra-film-UniqueFairyTale' >{decodeURIComponent(titleExtra)}</span>
                  <div className='status'> 
                     <span className='status-film'>
                     Tình trạng:
                     </span>
                     <span className='detail-status'>{decodeURIComponent(statuss)}</span>
                     </div>
                 
                  <span className='deligion' >Đạo diễn:{decodeURIComponent(statuss)}</span>
                  <span className='birth-film'>Năm Sản Xuất:{decodeURIComponent(year)}</span>
                  <span className='type'>Thể loại:{decodeURIComponent(type)}</span>
                  <span className='performer'>Diễn viên:{decodeURIComponent(paramater)}</span>
                  <span className='country'>Quốc gia:{decodeURIComponent(country)}</span>
                  <span className='time-film-UniqueFairyTale'>Thời lượng:{decodeURIComponent(time)}</span>
             </div>
             <div class="tiny-line"></div>
              <div  className='choose_dowl_view'>
                <h3 className='episode'>Tập Phim</h3>
                <div className='end-film-btn'><a className='link-select-film' href='#none'>End</a>  </div>
             </div>
             </div>
             <div>
             <YourComponent/>
             </div>
            </div>
            <div class="tiny-line"></div>
            <div className='commnent-film-intro-prev'>
                <h3 className='intro-content-film'>Content-Film</h3>
                <p className='decribe-film'>Tiếng Thét 6 lấy bối cảnh ở thành phố New York, nơi một số nhân vật sống sót sau các sự kiện của phần phim Scream thứ 5 chuyển đến, bao gồm con gái của Billy Loomis, Sam Carpenter, em gái của cô Tara Carpenter, người bạn Mindy Meeks-Martin và anh trai sinh đôi của cô ấy Chad Meeks-Martin. Rời khỏi thị trấn Woodsboro – nơi diễn ra những vụ án mạng Ghostface trong nhiều năm, nhóm bạn mong có thể thoát khỏi tên sát nhân khét tiếng này, nhưng họ lại không thể ngờ, không những không chấm dứt mà điều này còn mở ra một chương ám sát kinh hoàng hoàn toàn mới</p>
            </div>
            <div class="tiny-line"></div>
          </div>
         
        </div>
    )
}

export default UniqueFairyTale