import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ReagentDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/reagent')
      .then((res) => {
        setData(res.data);
      })
      .catch(function (err) {
        console.error('Error logging in:', err);
      });
  }, []);

  const {id}  = useParams();
  const reagent = data.find(item => item._id === id);

  return (
    <div>
      {reagent && (
        <div>
          <h1>Adasdasad</h1>
          <h1>{reagent.name}</h1>
          <p>Stock: {reagent.stock}</p>
          <p>Expiry Date: {reagent.expiryDate}</p>
        </div>
      )}
    </div>
  );
}

export default ReagentDetails;
