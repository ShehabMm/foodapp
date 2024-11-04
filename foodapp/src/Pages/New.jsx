import React from "react";
import { useState, useEffect } from "react";
function New() {
  const [name, setname] = useState("s");
  const [array1, setarray1] = useState([
    {
      title1: "shoes",
      checked: false,
    },
    { title1: "cloth", checked: false },
    { title1: "lemon", checked: false },
  ]);

  const [array2, setarray2] = useState([
    {
      title1: "A",
    },
    { title1: "B" },
    { title1: "C" },
  ]);

  const handleChecked = (index) => {
    const updated = [...array1];
    updated[index].checked = !updated[index].checked;
    setarray1(updated);
  };




  const handleC = () => {
    const updated = [...array1];
    const updated2 = [...array2];

    updated.map((item, index) => {
      if (item.checked) {
        updated[index].title1 = updated2[index].title1;
        updated2[index].title1 = updated[index].title1;
      }
    });
    setarray1(updated);
    setarray2(updated2);
  };

const myId = Math.round()

  return (
    <div    >
      {array1.map((item, index) => {
        return (
          <ul >
            <li>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleChecked(index);
                }}
                value={name}
                key={myId}
              />
              {item.title1}
            </li>
          </ul>
        );
      })}

      {array2.map((item) => {
        return <h3> {item.title1} </h3>;
      })}

      <button
        onClick={() => {
          handleC();
        }}
      >
        Swap wow{" "}
      </button>

      <select>
        <option value="">tezo</option>
        <option value="">zobro</option>
      </select>
    </div>
  );
}

export default New;
