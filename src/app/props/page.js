import Card from '@/componentes/Card';
    const dogs = [
        {
            id: 1,
            nome: 'Pink',
            raca: 'Labrador',
            peso: 35,
            cor: 'Branco',
        },
        {
            id: 2,
            nome: 'Bob',
            raca: 'Pit-Bull',
            peso: 40,
            cor: 'Marrom,',
        },
        {
            id: 3,
            nome: 'Cacau',
            raca: 'Shitzu',
            peso: 10,
            cor: 'Preto e branco',
        }
    ]
    export default function Props(){
    return(
        <div>
             <h1>Props</h1>
             <div>
                {dogs.map((dog) => (
                    <Card
                        key={dog.id}
                        nome={dog.nome}
                        raca={dog.raca}
                        peso={dog.peso}
                        cor={dog.cor}
                    />
                ))}
             </div>
        </div>
    )
}
