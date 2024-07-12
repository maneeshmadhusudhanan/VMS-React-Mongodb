import React, { useEffect, useState } from 'react'
import SearchVehicle from '../components/SearchVehicle'

const VehiclePage = () => {

const [vehicle, setVehicle] = useState([]);

useEffect(() => {
  fetch('/api/vehicle')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Fetched vehicle:', data);  
    setVehicle(data);
  })
  .catch(error => console.error('Error fetching vehicle:', error));
}, []);
return (
  <>
    <main className="flex-grow p-4">
      
      <div className="max-w-3xl mx-auto mb-8">
        <form action="/search" method="GET" className="w-full max-w-md flex">
          <input
            type="text"
            name="query"
            placeholder="Search vehicle..."
            className="flex-grow rounded-l px-4 py-2 border border-gray-300"
          />
          <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-2">Search</button>
        </form>
      </div>

  
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">search vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {vehicle.map(vehicle => (
            <SearchVehicle key={vehicle._id} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </main>
  </>
);
};

export default VehiclePage
