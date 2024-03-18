import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
const adminOrderDetails = () => {
    const [data,setData]=useState([]) ;
    useEffect(() => {
      axios.get('http://localhost:3000/clientorderDeatils', {
      })
        .then((res)=> {
           setData(res.data)
        })
        .catch(function (err) {
          console.error('Error logging in:', err);
        });
    }, []);
  return (
    <div className="grid grid-cols-3 gap-4">
    <div className="col-span-1 ">Name</div>
    <div className="col-span-1">Location</div>
    <div className="col-span-1">Orderd Units To be Dispatched~</div>

    {data.map((reagent, index) => (
      <React.Fragment key={index}>
        <div className="col-span-1">{reagent.name}</div>
        <div className="col-span-1">{reagent.location}</div>
        <div className="col-span-1">{reagent.units}</div>
      </React.Fragment>
    ))}
  </div>
  )
}

export default adminOrderDetails