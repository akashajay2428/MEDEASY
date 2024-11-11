import React, { useContext } from 'react'
import './MedDisplay.css'
import { StoreContext } from '../../Context/Storecontext'
import MedItem from '../MedItem/MedItem'

const MedDisplay = ({category}) => {

    const {med_list}=useContext(StoreContext)
  return (
    <div className="med-display" id='med-display'>
       <h2>Top Medicine near you</h2>
       <div className="med-display-list">
        {med_list.map((item,index)=>{
          if (category==="All" || category===item.category) {
             return <MedItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
         
        })}
       </div>
    </div>
  )
}

export default MedDisplay;