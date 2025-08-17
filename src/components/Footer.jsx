import YahwayLogo from '../assets/Yahway Logo.svg'

export default function footer() {
    return(
        <>
            <h3>Contact Us</h3>
            <p>Reach out to us on these platforms</p>
            <div>
                
                <img src={YahwayLogo} className="w-10 h-auto"></img>
                <label> Email </label>
                
                
                
                <img src={YahwayLogo} className="w-10 h-auto"></img>
                <label> Number </label>
                
            
                <img src="@Code/Visuals/Yahway Logo.svg"></img>
                <label> Social </label>
                
            </div>
            <p>&copy; 2025 YahWay. All Rights Reserved.</p>
        </>
    )
}