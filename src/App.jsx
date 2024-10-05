import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Lists } from './components/Lists';
import { AddService } from './components/AddService';

function App() {

  const [services, setServices] = useState([
    {
      name: "General Consultation",
      descr: "A comprehensive health checkup and consultation.",
      price: "50"
    },
    {
      name: "Dental Cleaning",
      descr: "Professional cleaning of teeth and oral hygiene checkup.",
      price: "100"
    },
    {
      name: "Physical Therapy",
      descr: "Therapeutic exercises and manual therapy to relieve pain and improve mobility.",
      price: "75"
    }
  ]);
  
  function handleModal() {
    const open_modal = document.getElementById("modal");
    open_modal.style.display = "block";
  }

  return (
    <>
      <div className='flex flex-col font-[poppins] bg-sky-100 h-screen py-8'>
        <div className='w-[40%] bg-slate-100 p-10 hidden  fixed top-[10%] left-[30%]
        ' style={{
            boxShadow: "10px 10px 10px #aaaaaa",
            zIndex: 1
          }} id='modal'>
          <AddService services={services} setServices={setServices} type="Add"/>
        </div>
        <div>
          <p className='text-4xl text-blue-950 font-bold text-center'>Health Care Services</p>
          <button className=' bg-green-500 p-3 text-white rounded-md mx-4'
            onClick={handleModal}
          >Add Service</button>
        </div>
        <div className='ml-14'>
          <ul className='flex flex-wrap '>
            {services.map((ele, index) => {
              return <li key={index}
                className='bg-slate-100 m-4 w-[30%] p-4 rounded text-center'
                style={{
                  boxShadow: " 10px 10px 10px #aaaaaa"
                }}
              ><Lists services={ele} i={index} setServices={setServices} serv={services} /></li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}



export default App
