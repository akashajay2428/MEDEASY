import React, { useEffect, useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {
    
    const Url="http://localhost:4000"
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        name:"",
        description:"",
        price:"",
        category:"Commonly Used"
    })

    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}));
    }

    const onsubmitHandler= async (event)=>{
        event.preventDefault();
        const formData=new FormData();
        formData.append("name",data.name);
        formData.append("description",data.description);
        formData.append("price",data.price);
        formData.append("category",data.category);
        formData.append("image",image);
        const response=await axios.post(`${Url}/api/medicine/add`,formData);
        if(response.data.success){
            setData({
                name:"",
                description:"",
                price:"",
                category:"Commonly Used"
            })
            setImage(false)
            toast.success(response.data.message)
        }else{
             toast.error(response.data.message)
        }
    }

  return (
    <div>
        <div className="add">
            <form onSubmit={onsubmitHandler} action="" className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img  src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" name="" id="image" hidden required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here'/>
                </div>
                <div className="add-product-description flex-col">
                      <p>Product description</p>
                      <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write Content Here'></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category-price flex-col">
                          <p>Product category</p>
                          <select name="category">
                            <option value="Commonly Used">Commonly Used</option>
                            <option value="(OTC) Medicines">(OTC) Medicines</option>
                            <option value="Vitamins & Supplements">Vitamins & Supplements</option>
                            <option value="Personal Care">Personal Care</option>
                            <option value="Health Devices">Health Devices</option>
                            <option value="Baby Care">Baby Care</option>
                            <option value="Wellness Essentials">Wellness Essentials</option>
                            <option value="Specialty Medications">Specialty Medications</option>
                          </select>
                    </div>
                    <div className="add-price flex-col" >
                        <p>Product price</p>
                        <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='₹20'/>
                    </div>
                </div>

                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    </div>
  )
}

export default Add