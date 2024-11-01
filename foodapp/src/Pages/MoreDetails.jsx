import  {Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
function MoreDetails (){
    const location = useLocation();
    const data = location.state;
const [det, setdet]=useState('')


    useEffect(()=>{

const getdata=async()=>{

const res = await axios.get(`https://fakestoreapi.com/products/${data}`)
setdet(res.data.title)
}

getdata()

    }, [])
return(

<div>

<h4>{det}</h4>
<Outlet/>
</div>

)

}


export default MoreDetails;