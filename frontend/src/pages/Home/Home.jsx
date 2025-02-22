import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import MedDisplay from '../../components/MedDisplay/MedDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'
const Home = () => {

  const [category,setCategory]=useState('All')
  return (
    <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <MedDisplay category={category}/>
        <Appdownload/>
    </div>
  )
}

export default Home