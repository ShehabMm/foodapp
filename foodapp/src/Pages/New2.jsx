import styles from "./New2.module.css";
import {useState, } from 'react'


function New2() {


const countries = [{name:"Choose Country", value:"IN", cities:[]}, {name:"india", value:"IN", cities:["dlehi", "mombai"]},{name:"Egypt", value:"IN", cities:["cairo", "giza"]}, {name:"England", value:"IN", cities:["califonia","tobo"]}]
const[country, setCountry]=useState()
  return <div className={styles.contianer}> 
  <h1>Hello World</h1>
  <select onChange={(e)=>{

 console.log(e.target.value);
    setCountry(e.target.value)
  }}     >

  {countries.map((item, index)=>{


return (


  <option value={index}  key={item.name}>{item.name}</option>

)


  })}
  </select>

  {/* second dropdown */}
  <select>

 {country &&countries[country].cities.map((item, index)=>{

return (<option key={index}>{item}</option>
)

  })} 
</select>
  </div>
}

export default New2
