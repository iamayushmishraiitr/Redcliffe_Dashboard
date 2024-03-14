import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const TableComponent = () => {
  const [data,setData]=useState([]) ;
  useEffect(() => {
    axios.get('http://localhost:3000/reagent', {
    })
      .then((res)=> {
         setData(res.data)
      })
      .catch(function (err) {
        console.error('Error logging in:', err);
      });
  }, []);

  return ( 
    <>
       <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 ">Name</div>
      <div className="col-span-1">Used In</div>
      <div className="col-span-1">Stock</div>
      <div className="col-span-1">Expiry Date</div>

      {data.map((reagent, index) => (
        <React.Fragment key={index}>
          <div className="col-span-1">{reagent.name}</div>
          <div className="col-span-1">{reagent.UsedIn.join(', ')}</div>
          <div className="col-span-1">{reagent.stock}</div>
          <div className="col-span-1">{reagent.expiryDate}</div>
        </React.Fragment>
      ))}
    </div>
    </>     
  )
}

export default TableComponent;
