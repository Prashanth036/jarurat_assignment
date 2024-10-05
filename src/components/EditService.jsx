import { useEffect, useState } from "react";

export const EditForm=({ services, setServices,details,setServiceList })=>{

     const [hospDetails, setHospDetails] = useState(
        {
        name: "",
        descr: "",
        price: ""
    });
    console.log(hospDetails)
    
    useEffect(() => {
        console.log(details)
        if (details) {
            setHospDetails(details.editService)
        }
    }, [details]);

    function handleSubmit(e) {
        e.preventDefault();
        if (hospDetails.name !== "" && hospDetails.descr !== "" && hospDetails.price !== "") {
            setServices(services.map((ele, idx) => {
                if (idx === details.idx) {
                    return hospDetails;
                } else {
                    return ele
                }
            }));
            // const servicesList=form.
            setHospDetails({
                name: "",
                descr: "",
                price: ""
            });
            setServiceList({
                editService: "",
                idx: 0
            })
            const open_modal = document.getElementById("modal2");
            open_modal.style.display = "none"
        
    }
}

function handleModal(e) {
    e.preventDefault();
    setHospDetails({
        name: "",
        descr: "",
        price: ""
    });
    setServiceList({
        editService: "",
        idx: 0
    })
    const open_modal = document.getElementById("modal2");
    open_modal.style.display = "none";
}


    const input_class = "border border-black p-2 w-[100%] my-4";
    const buttons = {
        submit_button: "bg-green-400 border-none text-white p-2",
        close_button: "text-red-600 text-end text-xl font-mono absolute right-0 border border-red-600 rounded-3xl w-7 px-2"
    }
    return(<>
     <form className='flex flex-col' >
                <h1 className='font-bold text-3xl relative'>Edit or Update a HealthCare Service
                    <button type="button" className={buttons.close_button} onClick={handleModal}>X</button></h1>
                <input type='text' className={input_class} onChange={(e) => setHospDetails({ ...hospDetails, name: e.target.value })}
                    value={hospDetails.name} required placeholder='Service Name'  />
                <textarea className={input_class} required onChange={(e) => setHospDetails({ ...hospDetails, descr: e.target.value })}
                    value={hospDetails.descr} placeholder='Service Description' />
                <input type='number' className={input_class} onChange={(e) => setHospDetails({ ...hospDetails, price: e.target.value })}
                    value={hospDetails.price} required placeholder='Service Price $' />
                <button
                    type="submit"
                    className={buttons.submit_button}
                    onClick={(e) => handleSubmit(e)}>Edit Service</button>
            </form>
    </>)
}