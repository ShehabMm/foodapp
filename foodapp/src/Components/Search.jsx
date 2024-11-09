import React from "react";
import styles from './Search.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
function Search({ fooddata, setfooddata }) {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "b48d4db32444465aafc0c1e6ecef6434 ";
  const [query, setQuery] = useState("");
  const [searchtext, setsearchtext]=useState("")

  useEffect(() => {
    async function getdata() {
      const res = await axios.get("https://fakestoreapi.com/products/");
      setfooddata(res.data);
    }
    getdata();
  }, []);

  console.log(fooddata);
  let searchResult = fooddata.filter((item)=>item.title.includes(searchtext))
  return (
    <div  className={styles.searchContainer}>
      <input 
      className={styles.input}
        type="text"
        placeholder="🔎 Search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setsearchtext(e.target.value)
        }}
      />



 
    </div>
  );
}

export default Search;
