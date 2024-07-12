import React from 'react'
const Center = () => {
  return (
<>
<div>
<div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to vehicle management system application</h1>
        <div class="mt-6">
            <a href="/vehicle" class="bg-blue-500 text-white px-6 py-2 rounded-full text-lg hover:bg-blue-600">Create vehicle manangement system</a>
        </div>
        <div class="mt-6">
            <input type="text" id="VehicleID" name="VehicleID" class="border-2 border-zinc-950 mb-2"
            placeholder="Enter Vehicle ID to view"/>
            <button class="border-1 bg-cyan-700 px-8 py-4 rounded text-white" onClick='redirectToVehicle()' >
                view details
           
            </button>
            </div>
    </div>




    </div>

</>
  )
}

export default Center
