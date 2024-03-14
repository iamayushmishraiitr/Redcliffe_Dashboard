import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/locations?search=${searchTerm}`);
      setLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
          <img src="logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex items-center">
          <img src="profile.png" alt="Profile" className="h-6 mr-2 rounded-full" />
          Client Name
        </div>
      </nav>
      <div className="container mx-auto mt-8 px-4">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search location by name..."
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="mt-8">
          {locations.map((location) => (
            <div key={location._id} className="bg-white shadow-md rounded-md p-4 mb-4">
              {location.location_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="max-w-lg w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="bg-gray-800 text-white px-4 py-3 flex items-center justify-between">
//           <div className="text-xl font-bold">Logo</div>
//           <div className="flex items-center">
//             <img src="profile.png" alt="Profile" className="w-6 h-6 rounded-full mr-2" />
//             <div>Client Name</div>
//           </div>
//         </div>
//         <div className="p-4">
//           <h1 className="text-2xl font-bold mb-4">Tests Available</h1>
//           <Link to="/tests/location1" className="block py-2 px-4 bg-blue-500 text-white rounded-md mb-2">Blood Test</Link>
//           <Link to="/tests/location1" className="block py-2 px-4 bg-blue-500 text-white rounded-md mb-2">Urine Test</Link>
//           <Link to="/tests/location1" className="block py-2 px-4 bg-blue-500 text-white rounded-md mb-2">Genetic Test</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

