'use client';
import { useState } from "react";

export default function Filter(){
  const [busca, setBusca] = useState("");
  const nomes = ['Wagner', 'Lavínia', 'Sofia', 'Júlia', 'Duda']
  const nums = [1,2,3,4,5,6,7,8,9,10];
  const pares = nums.filter(num =>(num%2==0))
  const nomesBusca = nomes.filter(nome => (nome.toLowerCase().startsWith(busca.toLowerCase())))
  console.log(nums);
  console.log(pares);
  return(
    <div>
      <h1>Filter</h1>
      <input
        value={busca}
        type="text"
        onChange={(ev) => (setBusca(ev.target.value))}
      />
      
      <ul>
          {nomesBusca.map((nome,i)=>(
            <li key={i}>{nome}</li>
          ))}
      </ul>
    </div>
  )
}
