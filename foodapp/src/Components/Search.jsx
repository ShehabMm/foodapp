import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Search({fooddata, setfooddata}) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "b48d4db32444465aafc0c1e6ecef6434 ";
  const [query, setQuery] = useState("pizza");
  useEffect(() => {



    async function getdata() {
      const res = await axios.get('https://fakestoreapi.com/products/');
console.log(res.data);
setfooddata(res.data)
console.log(fooddata);
    }
    getdata()
  }, []);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
}

export default Search;
