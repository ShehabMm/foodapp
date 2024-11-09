import styles from "./New2.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
function New2() {
  const countries = [
    { name: "Choose Country", value: "IN", cities: [] },
    { name: "india", value: "IN", cities: ["dlehi", "mombai"] },
    { name: "Egypt", value: "IN", cities: ["cairo", "giza"] },
    { name: "England", value: "IN", cities: ["califonia", "tobo"] },
  ];
  const [more, setmore] = useState(false);

  const [country, setCountry] = useState();
  const [image, setimage] = useState([]);
const [num, setnum]=useState(2)

  useEffect(() => {
    const getdata =async() => {
      const res = await axios.get("")
      setimage(res.data);
    };
    getdata();
    console.log(image[1].images);
  }, []);

  const pre = () => {
    setnum(num+1)
};

  return (
    <div className={styles.contianer}>
      <h1>Hello World</h1>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => {
          return (
            <option value={index} key={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* second dropdown */}
      <select>
        {country &&
          countries[country].cities.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
      </select>

      <>
        <p>hello man </p>
        <button
          onClick={() => {
            setmore(!more);
          }}
        >
          More details
        </button>

        <div>
          <p className={styles.button}>
            {more == true ? "she is very beautiful date hello ha" : ""}
          </p>
        </div>
      </>

      <div  className={styles.imageContainer}  >
        
      

           {/* <div    >
              <button onClick={()=>pre()}  >prv</button>
            


    <img src={image[2].images} alt="sorry" />                   
          </div>  */}
         
      


    


      <button> next</button>

      </div>
    </div>
  );
}

export default New2;
