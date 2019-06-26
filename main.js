//Desestruturação e REST
const usuario = {
    nome: 'Lucas',
    idade: 18
}
const { nome, ...resto } = usuario;

function soma(...params){
    return params.reduce((total, next) => total + next);
}


//SPREAD

const arr1 = [ 1 , 2, 3 ];
const arr2 = [ 4, 5 ,6 ];
const arr3 = [ ...arr1, ...arr2 ];

const usuario1 = {
    nome: 'Lucas',
    idade: 18
}
const usuario2 = { ...usuario1, nome: 'Delmondes' };

//Template literals
const nome1 = 'Lucas';
const idade1 = 18;

console.log(`Meu nome é ${nome1} e tenho ${idade1} anos.`)