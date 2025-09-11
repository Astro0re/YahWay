import YahwayLogo from '../assets/Yahway Logo.svg'

export default function footer() {
    return(
        <>
            
            <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <h3>Contact Us</h3>
                    <p>Reach out to us on these platforms</p>
                </div>

                <div style={{border: '1px', borderColor: 'gray', width:'1px', height:'10px'}}></div>

                <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <p> Email </p>

                    <p> Number </p>
                
                    <p> Social </p>
                </div>
                
                <div style={{border: '1px', borderColor: 'gray', width:'1px', height:'10px'}}></div>

                <div style={{display:'flex', flexDirection:'column', gap:'5px'}}>
                    <p>Terms and conditons</p>
                </div>
                
            </div>
            <p>&copy; 2025 YahWay. All Rights Reserved.</p>
        </>
    )
}