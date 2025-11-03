import Store_Card from '../components/Store_Card'
// function the filters shop items based on tags in the card
export default function store(){
    return(
        <>
            <div style={{display: 'block', alignContent:'center', justifyContent: "center", textAlign:'center', textShadow: 'revert'}}>
                <h1>The Shop</h1>
                <h3>The place for all your christian needs..</h3>
            </div>
            <nav style={{display:'inline-block', gap: '5px', justifyContent:'center' }}>
                <li>Books</li>
                <li>Accessories</li>
                <li>Appareal</li>
                <li>Graphics</li>
            </nav>
            <div style={{display: 'grid', gridTemplateColumns : 'repeat(2, 1fr)', gap:'5px', justifyContent : 'center'}}>
            <Store_Card />
            </div>
        </>
    )
}





