import React from 'react'
import "./Items.css"
const Items = () => {
const HandleColorflick  = () =>{
    setTimeout(() => {
       document.getElementById("onchangeFlick").classList.add("item_color")
    },5000);
};
    return (
        <div>
            <div className='items-center'>
                <span className='form-item'>
                <span onChange={HandleColorflick} id='onchangeFlick' className='item_color'>Hàn quốc hay</span>
                </span>
                <span className='form-item'>
                <span onChange={HandleColorflick} id='onchangeFlick' className='item_color'>Phim nổi bật</span>
                </span>
                <span className='form-item'>
                <span onChange={HandleColorflick} id='onchangeFlick' className='item_color'>Chiếu rạp</span>
                </span>
                <span className='form-item'>
                <span onChange={HandleColorflick} id='onchangeFlick' className='item_color'>Sắp ra mắt</span>
                </span>
                <span className='form-item'>
                <span onChange={HandleColorflick} id='onchangeFlick' className='item_color'>Tháng tới</span>
                </span>
               
            </div>
        </div>
    )
}

export default Items