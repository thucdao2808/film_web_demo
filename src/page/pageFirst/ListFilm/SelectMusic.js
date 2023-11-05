import React, { useState } from 'react';
import "./SelectMusic.css"
const YourComponent = () => {
  const [selection, setSelection] = useState(null);

  const listTimes = [
    { id: 1, time: 'ngày' },
    { id: 2, time: 'tháng' },
    { id: 3, time: 'năm' },
  ];

  const musicData = {
    1: [
      { number: 1, title: 'Thiếu niên ca hành', subTitle: 'The Blood Of Youth', link: 'Link 1' },
      { number: 2, title: 'Khói Lửa Nhân Gian', subTitle: 'FireWorks Of My Hearts', link: 'Link 2' },
      { number: 3, title: 'Tinh Lạc Ngưng Thành Đường', subTitle: 'The Strarry Love', link: 'Link 2' },
      { number: 4, title: 'Tuyết ưng lãnh chủ', subTitle: 'Snow Eagle Lord', link: 'Link 2' },
      { number: 5, title: 'Kính song thành', subTitle: 'A Tile Of Twins Cities', link: 'Link 2' },
      { number: 6, title: 'Trường Nguyệt Tẫn Minh', subTitle: 'Till The End Of The Moon', link: 'Link 2' },
      { number: 7, title: 'Tài xế taxi P2', subTitle: 'Taxi Driver', link: 'Link 2' },
      { number: 8, title: 'Hậu lãng', subTitle: 'Gen Z', link: 'Link 2' },
      { number: 9, title: 'Nhất Lộ triều dương', subTitle: 'All The Way To The Sun', link: 'Link 2' },
      { number: 10, title: 'Tanh Gươm Diệt Quỷ', subTitle: 'Kimetsu no Yaiba', link: 'Link 2' },
      
    ],
    2: [
      { number: 1, title: 'Thiếu niên ca hành', subTitle: 'The Blood Of Youth', link: 'Link 1' },
      { number: 2, title: 'Khói Lửa Nhân Gian', subTitle: 'FireWorks Of My Hearts', link: 'Link 2' },
      { number: 3, title: 'Tinh Lạc Ngưng Thành Đường', subTitle: 'The Strarry Love', link: 'Link 2' },
      { number: 4, title: 'Phong thần :Tam bộ khúc', subTitle: 'Creation Of the Gods:Kingdoms Of Storm', link: 'Link 2' },
      { number: 5, title: 'Nghệ thuật săn quỷ và nấu mì 2', subTitle: 'The Uncary couter S02', link: 'Link 2' },
      { number: 6, title: 'Trường nguyệt tẫn minh', subTitle: 'Till The End Of The Moon', link: 'Link 2' },
      { number: 7, title: 'Đồng thoại độc nhất', subTitle: 'Exclusive Failryable', link: 'Link 2' },
      { number: 8, title: 'One piece Live Action', subTitle: 'One piece 2', link: 'Link 2' },
      { number: 9, title: 'Tuyết ưng lãnh chủ', subTitle: 'SubTitle 2', link: 'Link 2' },
      { number: 10, title: 'Đấu la đại lục', subTitle: 'SubTitle 2', link: 'Link 2' },
    
    ],
    3: [
      { number: 1, title: 'Thế giới hoàn mĩ', subTitle: 'Perfect Wolrd', link: 'Link 5' },
      { number: 2, title: 'Music 6', subTitle: 'SubTitle 6', link: 'Link 6' },
      { number: 3, title: 'Bài ca của lưỡi kiếm', subTitle: 'Song of The Bandits', link: 'Link 2' },
      { number: 4, title: 'Nghệ thuật săn quỷ và nấu mì 2', subTitle: 'SubTitle 2', link: 'Link 2' },
      { number: 5, title: 'Tanh Gươm Diệt Quỷ', subTitle: 'SubTitle 2', link: 'Link 2' },
      { number: 6, title: 'Trường nguyệt tẫn minh', subTitle: 'Till The End Of The Moon', link: 'Link 2' },
      { number: 7, title: 'Đồng thoại độc nhất', subTitle: 'Exclusive Failryable', link: 'Link 2' },
      { number: 8, title: 'One piece Live Action', subTitle: 'One piece 2', link: 'Link 2' },
      { number: 9, title: 'Tuyết ưng lãnh chủ', subTitle: 'SubTitle 2', link: 'Link 2' },
      { number: 10, title: 'Đấu la đại lục', subTitle: 'SubTitle 2', link: 'Link 2' },
      
    ],
  };
  
  const renderMusicQue = () => {
    const defaultSelection = 1; // Thời gian mặc định là ngày

    if (selection !== null && musicData[selection]) {
      const musicQueData = musicData[selection];

      return (
        <div className='musicque'>
          {musicQueData.map((music) => (
            <a key={music.number} href={music.link} className='link-mount'>
              <div className='col-span-2'>
                <span className='number_click'>{music.number}</span>
              </div>
              <div className='display-music'>
                <span className='truncate'>{music.title}</span>
                <span className='title_small'>{music.subTitle}</span>
              </div>
            </a>
          ))}
        </div>
      );
    } else if (musicData[defaultSelection]) {
      // Nếu selection là null, hiển thị dữ liệu mặc định (ngày)
      const defaultMusicQueData = musicData[defaultSelection];

      return (
        <div className='musicque'>
          {defaultMusicQueData.map((music) => (
            <a key={music.number} href={music.link} className='link-mount'>
              <div className='col-span-2'>
                <span className='number_click'>{music.number}</span>
              </div>
              <div className='display-music'>
                <span className='truncate'>{music.title}</span>
                <span className='title_small'>{music.subTitle}</span>
              </div>
            </a>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <ul className='flex'>
        <li className='times'>
          {listTimes.map((listTime) => (
            <div key={listTime.id} className='times-hot'>
              <span
                className='line-animation'
                style={{ color: selection === listTime.id ? 'red' : 'white' }}
                onClick={() => setSelection(listTime.id)}
              >
                {listTime.time}
              </span>
            </div>
          ))}
        </li>
      </ul>
      <div class="tiny-line"></div>
      {renderMusicQue()}
    </div>
  );
};



export default YourComponent;
