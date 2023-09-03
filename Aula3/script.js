//O que são vetores ou arrays

//como declarar
let array = ["Vinicius", 1, true];
console.log(array);

//pode guardar varios tipos de dados
let array2 = ['Vinicius',1, true, ['Array'] , ['Array3']];
console.log(array2);

//foreach
array.forEach(function(item,index){console.log(item,index);});

//push
array.push('novo item');
console.log(array);

//pop tira item do fim
array.pop();
console.log(array);

//shift tira item do inicio
array.shift();
console.log(array);

//unshift adiciona no inicio
array.unshift('item Unshift');
console.log(array);

//indexof retorna o index de um item
console.log(array.indexOf('Vinicius'));

//splice remove ou substitui um item por um indice
array2.splice(0,3);
console.log(array);

//slice puxa uma parte de um array já existente
let novoArray = array2.slice(0,3);
console.log(novoArray);

//trabalhando com objeto
let objeto = {nome:'Vinicius', idade: 24, estudante: true, 
linguagens: ['C','JavaScript','TypeScript'], cursos: 
{cursos:['Sistemas de informação', 'Bootcamp Santander 2023']}};

console.log(objeto);

//como acessar valores
console.log(objeto.nome, objeto.idade);
