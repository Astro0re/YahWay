<>
<form>
    <input type= "text" placeholder="Event Name" id="EN"></input>
    <input type= "date" placeholder="Event Date" id="ED"></input>
    <input type= "text" placeholder="Event Location" id="EL"></input>
    <input type= "number" placeholder="Event Price" id="EP"></input>
    <button type="submit" id="SUB" onClick={adminadd}>Add Event</button>
</form>
</>

function adminadd(){
    //function to add events to the database
    let count = {}
    let Event_ID = count++
    let Event_name= document.getElementById("EN")
    let Event_date= document.getElementById("ED")
    let Event_location = document.getElementById("EL")
    let Event_price = document.getElementById("EP")
    return Event_ID,Event_name,Event_date,Event_location,Event_price;
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