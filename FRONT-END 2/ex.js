const titulo = document.querySelector('h1');

console.log('innerHTML:', titulo.innerHTML);
console.log('innerTEXT:', titulo.innerText);
console.log('innerCONTENT:', titulo.innerCONTENT);

titulo.textContent = 'Meu novo parágrafo'

const body = document.querySelector('body');
const ancora= document.createElement('a');
ancora.setAttribute('href','file:///C:/Users/2023103030054/Desktop/FRONT-END/projeto%202/siteReceitas/index.html');
ancora.setAttribute('targent','_blank')
ancora.textContent = 'Site de Receitas'
ancora.style.color = 'darkmargenta'
body.appendChild(ancora);
ancora.style.textDecoration = 'none'

//const body = document.querySelector('body');

// const lista = document.createElement('ul');
// const item1 = document.createElement('li');
// const item2 = document.createElement('li');
// const item3 = document.createElement('li');
// item1.textContent = 'item-1';
// item2.textContent = 'item-2';
// item3.textContent = 'item-3';
// lista.append(item1);
// lista.append(item2);
// lista.append(item3);
// body.append(lista)

