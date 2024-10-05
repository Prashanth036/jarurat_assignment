import { useState } from "react";
import { AddService } from "./AddService";
import { EditForm } from "./EditService";


let editService = ""
let idx = 0

export const Lists = ({ services, i, setServices, serv }) => {
    const list_service = {
        name: "py-4 text-2xl font-semibold text-blue-900",
        descr: "py-2 ",
        price: "py-2 text-xl "
    }
    const [serviceList, setServiceList] = useState({
        editService: "",
        idx: 0
    })
    // console.log(serviceList);
    function handleDelete(i) {
        console.log(serv[i])
        setServices(serv.filter((a, inx) => inx !== i));
    }
    function handleEdit(id, services1) {

        setServiceList({
            editService: services1,
            idx: id
        })
      
        setTimeout(() => {
            const open_modal = document.getElementById("modal2");
            open_modal.style.display = "block"
        }, 500);


        console.log(serviceList)

    }

    console.log(serviceList)


    return (
        <>
            <div>
                <div className="h-44">
                    <div className={list_service.name} style={{
                        textShadow: "10px 10px 10px #aaaaaa", textDecoration: "underline"
                    }}>{services.name}</div>
                    <div className={list_service.descr} >{services.descr}</div>
                    <div className={list_service.price}>
                        <span className="text-xl text-blue-900"> $ </span>
                        {services.price}</div>
                </div>
                <div className="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        onClick={(e) => handleDelete(i)}
                        className="size-6 cursor-pointer text-red-600 mx-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    <button onClick={(e) => handleEdit(i, services)}
                        disabled={serviceList.editService !== ""}
                        > <svg xmlns="http://www.w3.org/2000/svg" fill="none"

                        viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        className="size-6 cursor-pointer text-blue-500" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    </button >
                </div>
                {serviceList.editService !== "" &&    <div className='w-[40%] bg-slate-100 p-10 hidden  fixed top-[10%] left-[30%]
        ' style={{
                        boxShadow: "10px 10px 10px #aaaaaa",
                        zIndex: 1
                    }} id='modal2'>

                   
                        <EditForm services={serv} setServices={setServices} details={serviceList} setServiceList={setServiceList} />
                    </div>}

            </div>
        </>
    )
}