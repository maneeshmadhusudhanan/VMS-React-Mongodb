const { model,Schema} =require('mongoose');

const vehicles = new Schema({
    SERVICE_ID: { type: String, required: true ,unique :true},
    SERVICE_NAME: { type: String, required: true },
    VEHICLE_TYPE: { type: String, required: true },
    SERVICE_DATE: { type: String, required: true },
  
});

const courses = model('vehicle', vehicles);

module.exports = courses;
