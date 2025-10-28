import Store_Card from '../components/Store_Card'
export default function store(){
    return(
        <>
        <div style={{display: 'grid', gridTemplateColumns : 'repeat(2, 1fr)', gap:'5px', justifyContent : 'center'}}>
        <Store_Card />
        <Store_Card />
        <Store_Card />
        <Store_Card />
    </div>
        </>
    )
}





