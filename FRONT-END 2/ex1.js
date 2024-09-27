const itensMenu = [
    { nome: 'Início', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
    ];

const body = document.querySelector('body');
const header = document.querySelector('header');

const inicio = document.createElement('li');
const sobre = document.createElement('li');
const contato= document.createElement('li');

inicio.textContent = 'INÍCIO';
sobre.textContent = 'SOBRE';
contato.textContent = 'CONTATO';

lista.append(INÍCIO);
lista.append(SOBRE);
lista.append(CONTATO);

body.append(lista)