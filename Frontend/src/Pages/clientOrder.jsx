import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function ClientOrder() {
  const navigate=useNavigate() ;
  const { id } = useParams();
  const [data,setData]=useState([]) ;
  
  useEffect(() => {
    axios.get('http://localhost:3000/clientOrder', {
    })
      .then((res)=> {
         setData(res.data)
      })
      .catch(function (err) {
        console.error('Error logging in:', err);
      });
  }, []);
const newar= data.filter(prev=>(prev.location)===id) 
const fun=(index)=>{
  navigate(`/clientorder/${id}/${index}`)
}

  return ( 
    <>
        <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 ">Name</div>
      <div className="col-span-1">Used In</div>
      <div className="col-span-1">Stock</div>
      <div className="col-span-1">OrderedUnits</div>

      {newar.map((reagent, index) => (
        <React.Fragment key={index}>
          <div className="col-span-1">{reagent.name}</div>
          <div className="col-span-1">{reagent.UsedIn.join(', ')}</div>
          <div className="col-span-1">{reagent.stock}</div>
          <div className="col-span-1">
            <button onClick={()=> navigate(`/clientorder/${id}/${reagent.name}`)}>Place The Order</button>
            </div>
        </React.Fragment>
      ))}
    </div>
    </>     
  )
}

export default ClientOrder;
