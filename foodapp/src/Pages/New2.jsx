import React, { useLayoutEffect, useState } from "react";

function New2() {
  const arr = [
    { name: "play cricket", check: false },
    { name: "play video games", check: false },
    { name: "read books", check: false },
  ];
  const [copy, setcopy] = useState(arr);
  const [hidden, sethidden] = useState("none");
const [lol, setlol]=useState(false)
  const handleDelete = (index) => {
    let updated = copy.filter((item, inx) => {
      return inx != index;
    });

    setcopy(updated);
  };

const selected=(e,emplo)=>{
console.log( e.target.checked  ); 
if(lol){
e.target.checked===true

}
}
  return (
    <div>
      {copy.map((emplo, index) => {
        return (
          <ul key={Math.random()}>
            <li style={{ listStyleType: "none" }}>
              <input
              checked={lol}
              name={emplo.name}
              value=""
                onChange={(e) => {
                  selected(e,emplo);
                }}
                type="checkbox"
              />

              {emplo.name}

              <button
                style={{display:hidden }}
                onClick={(e) => handleDelete(e)}
              >
                delete
              </button>
            </li>
          </ul>

        );
      })}
                              <button onClick={()=>{

setlol(!lol)
                              }} >select all</button>

    </div>
  );
}

export default New2;
