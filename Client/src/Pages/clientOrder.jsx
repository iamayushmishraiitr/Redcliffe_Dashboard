// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// function ClientOrder() {
//   const navigate=useNavigate() ;
//   const { id } = useParams();
//   const [data,setData]=useState([]) ;
  
//   useEffect(() => {
//     axios.get('http://localhost:3000/clientOrder', {
//     })
//       .then((res)=> {
//          setData(res.data)
//       })
//       .catch(function (err) {
//         console.error('Error logging in:', err);
//       });
//   }, []);
// const newar= data.filter(prev=>(prev.location)===id) 
// const fun=(index)=>{
//   navigate(`/clientorder/${id}/${index}`)
// }

//   return ( 
//     <>
//         <div className="grid grid-cols-4 gap-4">
//       <div className="col-span-1 ">Name</div>
//       <div className="col-span-1">Used In</div>
//       <div className="col-span-1">Stock</div>
//       <div className="col-span-1">OrderedUnits</div>

//       {newar.map((reagent, index) => (
//         <React.Fragment key={index}>
//           <div className="col-span-1">{reagent.name}</div>
//           <div className="col-span-1">{reagent.UsedIn.join(', ')}</div>
//           <div className="col-span-1">{reagent.stock}</div>
//           <div className="col-span-1">
//             <button onClick={()=> navigate(`/clientorder/${id}/${reagent.name}`)}>Place The Order</button>
//             </div>
//         </React.Fragment>
//       ))}
//     </div>
//     </>     
//   )
// }

// export default ClientOrder;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function ClientOrder() {
  const navigate=useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/clientOrder')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.error('Error logging in:', err);
      });
  }, []);

  const newar = data.filter(prev => (prev.location) === id);

  // const fun = (index) => {
  //   navigate(`/clientorder/${id}/${index}`)
  // }

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="grid grid-cols-4 gap-4 bg-blue-500 text-white font-bold p-2">
            <div>Name</div>
            <div>Used In</div>
            <div>Stock</div>
            <div>Ordered Units</div>
          </div>
          {newar.map((reagent, index) => (
            <div key={index} className="grid grid-cols-4 gap-4 border-t border-gray-300 hover:text-[#0000ff] hover:bg-gray-200">
              <div className="py-2">{reagent.name}</div>
              <div className="py-2">{reagent.UsedIn.join(', ')}</div>
              <div className="py-2">{reagent.stock}</div>
              <div className="py-2">
              <button className="border border-green-500 rounded-md px-2 py-1" onClick={() => navigate(`/clientorder/${id}/${reagent.name}`)}>Place The Order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ClientOrder;
