function Foodlist({fooddata}){



return (
<>

{fooddata.map((item)=>{

return(
<>
<h1 key={item.id}>{item.title}</h1>
<img src={item.image} alt="" />
</>
)


})}


</>

)


}

export default Foodlist; 