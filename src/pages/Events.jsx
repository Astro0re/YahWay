export default function Events(){
    return(
        <>
            <section className="bg-white p-6 m-2 rounded-lg shadow gap-5">
        
        <div style={{display: 'grid', gridTemplateColumns : 'repeat(2, 1fr)', gap:'5px', justifyContent : 'center'}}>

            <div style={{background:'black', textAlign:'center', color:'white', padding:'10px', borderRadius:'10px'}}>
            <img  alt="Community" style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px'}}></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 1 </p>
            </div>
            </div>

            <div style={{background:'black', textAlign:'center', color:'white', padding:'10px', borderRadius:'10px'}}>
            <img  alt="Community" style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px'}}></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 2 </p>
            </div>
            </div>

            <div style={{background:'black', textAlign:'center', color:'white', padding:'10px', borderRadius:'10px'}}>
            <img  alt="Community" style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px'}}></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 3 </p>
            </div>
            </div>

            <div style={{background:'black', textAlign:'center', color:'white', padding:'10px', borderRadius:'10px'}}>
            <img  alt="Community" style={{height:'fit-content', width:'fit-content', borderRadius:'10px', padding:'5px'}}></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 4 </p>
            </div>
            </div>
           
        </div>
    </section>
        </>
    )
        
}