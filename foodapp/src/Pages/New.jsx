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

const handleChecked=(index)=>{

const updated = [...array1];
 updated[index].checked=!updated[index].checked;
 setarray1(updated)

}

const handleC =()=>{
  const updated = [...array1];
const updated2=[...array2]

updated.forEach((item, index)=>{

if (item.checked){
const tempo = updated[index].title1
updated[index].title1=updated2[index].title1
updated2[index].title1=tempo
}

})
setarray1(updated)
setarray2(updated2)


}



   
  





  return (
    <div >
      {array1.map((item, index) => {
        return (
          <ul key={index}>
           <li>
                <input type="checkbox" checked={item.checked}  onChange={()=>{handleChecked(index)}} value={name}/>
                {item.title1}
                </li>
          </ul>

        );
      })}

{array2.map((item)=>{

return (
    
    
   <h3>    {item.title1}     </h3>
   
)

})}

                              <button onClick={()=>{handleC()}}>Swap wow </button>

      <select>

        <option value="">tezo</option>
        <option value="">zobro</option>

      </select>
</div>
    ); 
}

export default New;
