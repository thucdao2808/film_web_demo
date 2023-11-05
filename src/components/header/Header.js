import React, { useState } from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams} from 'react-router-dom';
import { ListAnimes } from './Data';
const Header = ({ListAnimes}) => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <div className='selection_bar'>
                <div className='logo_and_select'>
                   <div className='logo'>
                        <img className='logo-film-studio' src='https://tse2.mm.bing.net/th?id=OIP.eGxwaCilF5eLfhVKJ2y5uAHaHa&pid=Api&P=0&h=220' alt='' />
                   </div>
                   <div className='list-selection-film'>
                            <ul className='select-user'>
                                <li className='menu-destop'>
                                  <Link  className="router-menu" to="/" >
                                     trang chủ
                                  </Link>
                                </li>
                                <li className='menu-destop'>
                                thể loại
                                    <div className='grid-select'>
                                        {ListSelect.map((item,index)=>(
                                           <ul className='all_category-films' key={index} >
                                              <li className='category-films'>{item}</li>
                                           </ul>
                                          ))}
                                     </div>
                                </li>
                                <li className='menu-destop'>
                                quốc gia
                                    <div className='grid-select'>
                                        {ListCountry.map((item,index)=>(
                                           <ul className='all_category-films' key={index} >
                                              <li className='category-films'>{item}</li>
                                           </ul>
                                          ))}
                                     </div>
                                </li>
                                <li className='menu-destop'>
                                phim mới
                                <div className='grid-select'>
                                        {ListYear.map((item,index)=>(
                                           <ul className='all_category-films' key={index} >
                                             <Link to='/active'>
                                                  <li className='category-films'>{item}</li>
                                             </Link>
                                           </ul>
                                          ))}
                                     </div>
                                </li>
                                <li className='menu-destop'>
                                  <Link to='/tvmovie'>
                                     phim bộ 
                                  </Link>
                                </li>
                                <li className='menu-destop'>
                                  <Link to='/MovieOdd'>
                                     phim lẻ
                                  </Link>
                                </li>
                                <li className='menu-destop'>
                                 <Link to= '/Theatean'>
                                    phim chiếu rạp
                                 </Link>
                                </li>
                           </ul>
                         
                   </div>
                </div>
                <div className='research-input'>
                    <div className="input-search-film">
                        <input type="text" name="text" className="input-film" placeholder="Nhập phim mà bạn muốn tìm"  onChange={(e) => setSearchQuery(e.target.value)} ></input>
                        <button className="search__btn" >
                           <Link to={`/btn-result/${searchQuery}`} >
                              <FontAwesomeIcon icon={faSearch} />
                           </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

    const ListSelect = [
        "phim hành đông",
        "phim tình cảm",
        "phim tâm lý",
        "phim hài",
        "phim cổ trang",
        "phim kinh dị",
        "phim hoạt hình",
        "phim viễn tưởng",
        "phim hình sự",
        "phim phiêu lưu",
        "phim âm nhạc",
        "phim chiến tranh",
        "phim khoa học",
        "phim võ thuật",
        "phim thấn thoại",
        "phim TV show",
    ];
    const ListCountry = [
        "nhật bản",
        "hàn quốc",
        "hồng kong",
        "mỹ",
        "thái lan",
        "anh",
        "pháp",
        "trung quốc",
        "đài loan",
        "ấn độ ",
        "phim khác",
    ];
    const ListYear= [
        "năm 2020",
        "năm 2019",
        "năm 2017",
        "năm 2023",
        "năm 2016",
        "năm 2022",
        "năm 2018",
        "năm 2015",
       
    ];
