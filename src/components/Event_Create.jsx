function Event_Create() {
    return(
    <>
    <form>
    <input type= "text" placeholder="Event Name" id="EN"></input>
    <input type= "date" placeholder="Event Date" id="ED"></input>
    <input type= "text" placeholder="Event Location" id="EL"></input>
    <input type= "number" placeholder="Event Price" id="EP"></input>
    <button type="submit" id="SUB" onClick={adminadd}>Add Event</button>
    </form>
    </>);
}

function adminadd(){
    //function to add events to the database
    Event_info= [
    Event_ID = count++ ,
    Event_name= document.getElementById("EN"),
    Event_date= document.getElementById("ED"),
    Event_location = document.getElementById("EL"),
    Event_price = document.getElementById("EP") ];
};

adminadd();

const fs = require('fs');
fs.writeFile('EventCard.json', JSON.stringify(Event_info, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});


export default Event_Create;