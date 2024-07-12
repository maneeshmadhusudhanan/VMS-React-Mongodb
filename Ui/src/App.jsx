
import React from 'react'
import Firstlayout from './Layout/Firstlayout'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Mainlayout from './Layout/Mainlayout'
import VehiclePage from './pages/VehiclePage'
import AddVehicle from './pages/AddVehicle'
import Indexpage from './pages/IndexPage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>    
        <Route path='/' element={<Firstlayout/>}>
        <Route index element={<Indexpage/>}/>
        <Route path='/signup' element={<Signuppage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Route>
        <Route path='/' element={<Mainlayout/>}>
        <Route path='/home' element={<VehiclePage/>}/>
        <Route path='/add-vehicle' element={<AddVehicle/>}/>
      </Route>
      </>
    )
  )
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}
export default App
