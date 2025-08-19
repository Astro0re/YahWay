import defaultpic from '../assets/defaultpic.png';
export default function event(){
    return(
        <>
            <section  className="bg-white p-6 m-2 rounded-lg shadow gap-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-4 justify-center">

            <div className="bg-black text-center text-white p-10 rounded">
            <img src={defaultpic} alt="Community" class="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 1 </p>
            </div>
            </div>

            <div className="bg-black text-center text-white p-10 rounded">
            <img src={defaultpic} alt="Community" class="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 2 </p>
            </div>
            </div>

            <div className="bg-black text-center text-white p-10 rounded">
            <img src={defaultpic} alt="Community" class="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 3 </p>
            </div>
            </div>

            <div className="bg-black text-center text-white p-10 rounded">
            <img src={defaultpic} alt="Community" class="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Event 4 </p>
            </div>
            </div>
           
        </div>
    </section>
        </>
    )
        
}