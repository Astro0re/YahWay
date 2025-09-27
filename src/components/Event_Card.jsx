function adminadd(){
    //function to add events to the database
    let Event_name= <input type="text" />
    let Event_date= <input type="date" />
    let Event_location = <input type="number" />
    let Event_price = <input type="text" />
    return Event_name,Event_date,Event_location,Event_price;
}

export default function Event_Card(){
    return(
        <>
        <div style={{background:'black', textAlign:'center', color:'white', spadding:'10px', borderRadius:'10px'}}>
            <img  style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px'}}></img>
            <div style={{display:'flex', flexDirection:'column', gap:'20px', justifyContent:'center', padding:'4px', background:'white', color:'black', margin:'2px', borderRadius:'10px'}}>
                <img style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px', borderBlockColor: 'black'}}></img>
                {adminadd()}
                <p>(Event Name here)</p>
                <p>(Date Here)</p>
                <p>(Location Here)</p>
                <p>(Ticket Price)</p>
                <a src="(event link)">For More info</a>
            </div>
        </div>
        </>
    )
}