import defaultpic from '../assets/defaultpic.png';

export default function store(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-2 text-white">
        <div className="bg-black text-center text-white p-10 rounded">
            <img src={defaultpic} className="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row flex-warp gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Head Warmer </p>
                <p>$10</p>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-md bottom-auto center[10px]">Add to Cart</button>
        </div>

        <div className="bg-black text-center text-white p-10 rounded">
        <img src={defaultpic} className="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Head Warmer </p>
                <p>$10</p>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-md bottom-auto center[10px]">Add to Cart</button>
        </div>

        <div className="bg-black text-center text-white p-10 rounded">
        <img src={defaultpic} className="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Head Warmer </p>
                <p>$10</p>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-md bottom-auto center[10px]">Add to Cart</button>
        </div>

        <div className="bg-black text-center text-white p-10 rounded">
        <img src={defaultpic} className="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Head Warmer </p>
                <p>$10</p>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-md bottom-auto center[10px]">Add to Cart</button>
        </div>

        <div className="bg-black text-center text-white p-10 rounded">
        <img src={defaultpic} className="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Head Warmer </p>
                <p>$10</p>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-md bottom-auto center[10px]">Add to Cart</button>
        </div>

        <div className="bg-black text-center text-white p-10 rounded">
        <img src={defaultpic} className="h-fit w-fit rounded p-5"></img>
            <div className="flex flex-row gap-20 justify-center p-4 bg-white text-black m-2 rounded">
                <p>Head Warmer </p>
                <p>$10</p>
            </div>
                <button className="bg-blue-500 text-white p-2 rounded-md bottom-auto center[10px]">Add to Cart</button>
        </div>

        

    </div>
        </>
    )
}





