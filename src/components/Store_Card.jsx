function adminadd(){
    //function to add events to the database
    let Item_name= <input type="text" />
    let Item_description= <input type="Desription" />
    let Item_price = <input type="text" />
    return Item_name, Item_description, Item_price
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