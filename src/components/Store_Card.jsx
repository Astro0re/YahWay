<>
<form>
    <input type= "text" placeholder="Item Name" id="IN"></input>
    <input type= "text" placeholder="Item Description " id="IDes"></input>
    <input type= "number" placeholder="Item Price" id="IP"></input>
    <button type="submit" id="SUB" onClick={adminadd}>Add Event</button>
</form>
</>

import Items from './StoreItems.json' 

function adminadd(){
    //function to add events to the database
    let count={}
    let Item_ID= count++
    let Item_name= {Items.name}
    let Item_description= <input type="Desription" />
    let Item_price = <input type="text" />
    return Item_ID,Item_name, Item_description, Item_price
}

export default function Store_Card(){
    return(
        <>
        <div style={{background:'black', textAlign:'center', color:'white', padding:'10px', borderRadius:'10px'}}>
            <img  style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px'}}></img>
            <div style={{display:'flex', flexDirection:'column', gap:'20px', justifyContent:'center', padding:'4px', background:'white', color:'black', margin:'2px', borderRadius:'10px'}}>
                {adminadd()}
                <p>(Text here)</p>
                <p>(Price Here)</p>
            </div>
        </div>
        </>
    )
}