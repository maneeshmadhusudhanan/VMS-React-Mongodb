import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddVehicle = () => {
    const [SERVICE_ID, setSERVICE_ID] = useState('');
    const [SERVICE_NAME, setSERVICE_NAME] = useState('');
    const [VEHICLE_TYPE, setVEHICLE_TYPE] = useState('');
    const [SERVICE_DATE, setSERVICE_DATE] = useState('');
    const navigate = useNavigate();

    const addVehicle = async (newVehicle) => {
        const res = await fetch('/api/add-vehicle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newVehicle),
        });
        return res;
    };

    const submitForm = async (e) => {
        e.preventDefault();
        const newVehicle = { SERVICE_ID, SERVICE_NAME, VEHICLE_TYPE,SERVICE_DATE };
        const res = await addVehicle(newVehicle);
        if (res.ok) {
            toast.success('New vehicle added');
            navigate('/home');
        } else {
            toast.error('Failed to add vehicle');
        }
    };

    return (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md mx-auto mt-[10%]">
            <h2 className="text-2xl font-bold mb-6">Add vehicle</h2>
            <form onSubmit={submitForm}>
                <div className="mb-4">
                    <label htmlFor="SERVICE_ID" className="block text-gray-700 text-sm font-bold mb-2">vehicle ID</label>
                    <input type="text" id="SERVICE_ID" name="SERVICE_ID" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={SERVICE_ID} onChange={(e) => setSERVICE_ID(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="SERVICE_NAME" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required value={SERVICE_NAME} onChange={(e) => setSERVICE_NAME(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="VEHICLE_TYPE" className="block text-gray-700 text-sm font-bold mb-2">vehicle type</label>
                    <textarea id="VEHICLE_TYPE" name="VEHICLE_TYPE" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required value={VEHICLE_TYPE} onChange={(e) => setVEHICLE_TYPE(e.target.value)} ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="SERVICE_DATE" className="block text-gray-700 text-sm font-bold mb-2">service_date</label>
                    <input type='date' id="name" name="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4" required value={SERVICE_DATE} onChange={(e) => setSERVICE_DATE(e.target.value)} ></input>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddVehicle;
