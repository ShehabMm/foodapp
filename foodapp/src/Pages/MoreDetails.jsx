import  {useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
function MoreDetails (){
    const location = useLocation();
    const data = location.state;
    console.log(data);
const [det, setdet]=useState('')


    useEffect(()=>{

const getdata=async()=>{

const res = await axios.get(`https://fakestoreapi.com/products/${data}`)
console.log(res.data);
setdet(res.data.title)
}

getdata()

    }, [])
return(

<div>

<h4>{det}</h4>

</div>

)

}


export default MoreDetails;