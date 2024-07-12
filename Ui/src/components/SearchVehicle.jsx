import React from 'react';
const SearchVehicle = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-xl font-semibold">{vehicle.SERVICE_NAME}</h3>
      <h1 className='text-xl font-semibold'>{vehicle.SERVICE_ID}</h1>
      <p className="text-gray-600">{vehicle.VEHICLE_TYPE}</p>
      <p className="text-gray-600">{vehicle.SERVICE_DATE}</p>
    </div>
  );
};

export default SearchVehicle;



