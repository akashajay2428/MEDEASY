import React from 'react'
import './Exploremenu.css';
import { menu_list } from '../../assets/assets';
const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore medcine</h1>
      <p className='explore-menu-text'>Discover a carefully curated selection of essential health products designed to support your well-being.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
             return(
               <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                  <img className={category===item.menu_name?'active':''} src={item.menu_image}/>
                  <p>{item.menu_name}</p>
               </div>
             )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu