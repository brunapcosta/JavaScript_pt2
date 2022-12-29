/* ARRAY */

// PUSH:

// const students = ['André', 'Bruna', 'Raquel', 'Singlair']
// students.push('Fernando')
// students.push('Bruno')
// console.log(students)

// LENGTH:

// const students = ['André', 'Bruna', 'Raquel', 'Singlair']
// console.log(students.length)

// SORT:

// const students = ['Raquel', 'Singlair', 'André', 'Bruna']

// console.log(students.sort())

// Delete:

// const students = ['Raquel', 'Singlair', 'André', 'Bruna', 'Bruno']
// delete students[4]
// console.log(students)

// SPLICE (unir/ ligar): 
// students.splice(o item a partir de qual você quer alterar, quantos você quer alterar)

// const students = ['Raquel', 'Singlair', 'André', 'Bruna', 'Bruno']
// students.splice(1,1) // // tira apenas um elemento.
// students.splice(1,1, 'Fernando') // // tira e adiciona um item naquele determinado lugar.
// students.splice(1, 0, 'Fernando') // // não tira, mas adiciona um item no lugar selecionado.
// console.log(students)

// SLICE (fatiar):   

// const students = ['Raquel', 'Singlair', 'André', 'Bruna', 'Bruno']
// É preciso criar uma nova variavel, um novo array, pois ele não modifica o original.

// const newstudents =  students.slice(1) // mostra a partir do item 1.
// const newstudents =  students.slice(1,2) // mostra apenas o item 1.
// const newstudents =  students.slice(1,4) // mostra do item 1 ao 3.
// console.log(newstudents)

// POP:

// const students = ['Raquel', 'Singlair', 'André', 'Bruna', 'Bruno']
// students.pop()
// console.log(students)

// SHIFT:          

// const students = ['Raquel', 'Singlair', 'André', 'Bruna', 'Bruno']
// students.shift()
// console.log(students)