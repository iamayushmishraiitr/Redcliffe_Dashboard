import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ClientOrderDetails = () => {
    const { id} = useParams();
     const {id2} =useParams();
    const [order, setOrder] = useState();
    const handleChange = (e) => {
        setOrder(e.target.value);
    };
const submit=()=>{
   axios.post('http://localhost:3000/clientorderDeatils',{
        units:order ,
        name:id2 ,
         location:id
   })
}
    return (
        <div >
            <h1>Place The Order Here : </h1>
            <input className='border-2 border-black' type='text' value={order} onChange={handleChange}></input>
            <br></br>
            <button className='border-2 border-black' onClick={submit}>Submit</button>
        </div>
    );
};

export default ClientOrderDetails;
