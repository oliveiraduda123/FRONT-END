export default function Listas(){
    const racas = ['Vira-lata', 'Shitzu', 'Pit-Bul', 'Labrador']

    const racasObj = [
        {
            id:1,
            raca: 'Vira-lata',
        },

        {
            id:2,
            raca: 'Shitzu',
        },
        {
            id:3,
            raca: 'Pit-Bul',
        },
        {
            id:4,
            raca: 'labrador',
        }
        
    ]
    return(
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <h1>Listas</h1>
            
            <h2>Lista Comum</h2>
            <ul>
                {racas.map((raca, i) =>(
                    <li key={i}>{i+1} - {raca}</li>
                ))}
            </ul>
            <div>
                <h2>Lista de Objetos</h2>
                {racasObj.map((racaObj) =>(
                    <div key={racaObj.id}>
                        <h3>{racaObj.id}</h3>
                        <p>{racaObj.raca}</p>
                    </div>
                ))}
            </div>
        </div>
    )  
}