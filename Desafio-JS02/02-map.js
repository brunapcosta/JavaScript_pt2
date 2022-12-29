/* EXERCICIO 2:
const students = [
    {name: 'André', testGrade: 7, finalResult: 'approved'},
    {name: 'Bruna', testGrade: 5, finalResult: 'disapproved'},
    {name: 'Bruno', testGrade: 8, finalResult: 'approved'},
    {name: 'Carolinne', testGrade: 9, finalResult: 'approved'},
    {name: 'Fernando', testGrade: 3, finalResult: 'disapproved'},
    {name: 'Raquel', testGrade: 2,finalResult: 'disapproved'},
    {name: 'Singlair', testGrade: 10, finalResult: 'approved'}
];
*/


// const students = [
//     {name: 'André', testGrade: 7},
//     {name: 'Bruna', testGrade: 5},
//     {name: 'Bruno', testGrade: 8},
//     {name: 'Carolinne', testGrade: 9},
//     {name: 'Fernando', testGrade: 3},
//     {name: 'Raquel', testGrade: 2},
//     {name: 'Singlair', testGrade: 10}
// ]

// const studentsGrade = students.map( student => {
//     const studentGrade = {
//         name: student.name,
//         finalResult: student.testGrade >= 7 ? 'approved' : 'disapproved'
//     }
//     return studentGrade
// })

// console.log(studentsGrade)



// const studentsGrade = students.map( student => {
//     let approvedornot

//     if (student.testGrade >= 7) {
//         approvedornot = 'approved'        
//     }
//     else{
//         approvedornot = 'disapproved'
//     }
   
//     const studentGrade = {
//         name: student.name,
//         finalResult: approvedornot
//     }
//     return studentGrade
// })

// console.log(studentsGrade)