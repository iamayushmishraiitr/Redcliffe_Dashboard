// import React from 'react'
// import { useEffect,useState } from 'react'
// import axios from 'axios';
// const adminOrderDetails = () => {
//     const [data,setData]=useState([]) ;
//     useEffect(() => {
//       axios.get('http://localhost:3000/clientorderDeatils', {
//       })
//         .then((res)=> {
//            setData(res.data)
//         })
//         .catch(function (err) {
//           console.error('Error logging in:', err);
//         });
//     }, []);
//   return (
//     <div className="grid grid-cols-3 gap-4">
//     <div className="col-span-1 ">Name</div>
//     <div className="col-span-1">Location</div>
//     <div className="col-span-1">Orderd Units To be Dispatched~</div>

//     {data.map((reagent, index) => (
//       <React.Fragment key={index}>
//         <div className="col-span-1">{reagent.name}</div>
//         <div className="col-span-1">{reagent.location}</div>
//         <div className="col-span-1">{reagent.units}</div>
//       </React.Fragment>
//     ))}
//   </div>
//   )
// }

// export default adminOrderDetails

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrderDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/clientorderDeatils/adminOrderDetails')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error logging in:', err);
      });
  }, []);

  return (
    <div className="w-[95vw] mb-[5vh] container mx-auto mt-8">
      <div className="border border-gray-300 rounded-lg p-4">
        <div className="grid grid-cols-4 gap-4 bg-blue-500 text-white font-bold p-2">
          <div>Name</div>
          <div>Location</div>
          <div>Quantity</div>
          <div>Status</div>
        </div>
        {data?.map((order, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-300 hover:text-[#0000ff] hover:bg-gray-200">
            <div className="py-2">{order.name}</div>
            <div className="py-2">{order.location}</div>
            <div className="py-2">{order.units}</div>
            <div className="py-2">{order.Status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrderDetails;
