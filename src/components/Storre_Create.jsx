function addItem(){
    //function to add items to the store
    <>
    <form>
    <input type= "text" placeholder="Item Name" id="IN"></input>
    <input type= "text" placeholder="Item Description " id="IDes"></input>
    <input type= "number" placeholder="Item Price" id="IP"></input>
    <button type="submit" id="SUB" onClick={adminadd}>Add Event</button>
    </form>
    </>
}




function adminadd(){
    //function to add events to the database
    let count={}
    let Item_ID= count++
    let Item_name= document.getElementById('IN')
    let Item_description= document.getElementById('IDes')
    let Item_price = document.getElementById('IP')
    return Item_ID,Item_name, Item_description, Item_price
}

const fs = require('fs');
fs.writeFile('StoreItems.json', JSON.stringify(Items, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});