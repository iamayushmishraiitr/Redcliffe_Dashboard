import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios'
function clientOrder() {
    const {id} = useParams() 
    const [data, setData] = useState([]);
useEffect(()=>{
    axios.get('/clientOrder')
         .then(res=>{
            setData(res.data) ;
         })
         .catch(err=>{
            console.log("Error:" ,err) ;
         })
},[])

  return (
    <div>clientOrder</div>
  )
}

export default clientOrder