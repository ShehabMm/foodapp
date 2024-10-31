import styles from './Foodlist.module.css'
function Foodlist({fooddata}){



return (
<div className={styles.bigContainer}>

{fooddata.map((item)=>{

return(
<div className={styles.foodlist}>
<img width="200px" height="250px" style={{marginTop:"10px"}} src={item.image} alt="" />

<h3 key={item.id}>{item.title}</h3>
<button className={styles.itembutton}>View Item details</button>
</div>
)


})}


</div>

)


}

export default Foodlist; 