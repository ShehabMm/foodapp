import styles from './Foodlist.module.css'
import { useNavigate } from "react-router-dom";

function Foodlist({ fooddata }) {


    const navigate = useNavigate();

    return (
        <div className={styles.bigContainer}>

            {fooddata.map((item) => {

                return (
                    <div className={styles.foodlist}>
                        <img width="200px" height="250px" style={{ marginTop: "10px" }} src={item.image} alt="" />

                        <h3 key={item.id}>{item.title}</h3>
                        <button className={styles.itembutton} onClick={()=>{
console.log(item.id);
navigate("./details", {state:item.id})

                        }}  >View Item details</button>
                    </div>
                )


            })}


        </div>

    )


}

export default Foodlist; 