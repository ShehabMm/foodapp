import React from "react";
import {useState} from 'react'
function New() {

    const[name, setname]=useState("")
  const [array1, setarray1] = useState([
    {
      title1: "shoes",checked:false
    },
    { title1: "cloth",checked:false },
    { title1: "lemon",checked:false },
  ]);


  const [array2, setarray2] = useState([
    {
      title1: "A",
    },
    { title1: "B" },
    { title1: "C" },
  ]);

const handleChecked=(e)=>{

const updated = array1.map((item,index)=>index==e?[...array1,item.checked==true  ]:array1  )
setarray1(updated)

}

  return (
    <div  >
      {array1.map((item, index) => {
        return (
          <ul key={index}>
           <li>
                <input type="checkbox" checked={item.checked}  onChange={()=>{handleChecked({index})}} value={name}/>
                {item.title1}
                </li>
          </ul>
        );
      })}
    
      <select>

        <option value="">tezo</option>
        <option value="">zobro</option>

      </select>
</div>
    ); 
}

export default New;
