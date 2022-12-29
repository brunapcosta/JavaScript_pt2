/* EXERCICIO 1: 
const invitations = [
    { name: 'André', vip: true, sector: 'Black' },
    { name: 'Bruna', vip: false, sector: 'Green' },
    { name: 'Bruno', vip: true sector: 'Black' },
    { name: 'Carolinne', vip: true, sector: 'Black' },
    { name: 'Fernando', vip: false, sector: 'Green' },
    { name: 'Raquel', vip: true, sector: 'Black' },
    { name: 'Singlair', vip: false, sector: 'Green' }
];
*/

// const invitations = [
//     { name: 'André', vip: true },
//     { name: 'Bruna', vip: false },
//     { name: 'Bruno', vip: true },
//     { name: 'Carolinne', vip: true },
//     { name: 'Fernando', vip: false },
//     { name: 'Raquel', vip: true },
//     { name: 'Singlair', vip: false }
// ];

// const newInvitations = invitations.map( invitation => {
//     const newInvitation = {
//         name: invitation.name,
//         vip: invitation.vip,
//         sector: invitation.vip ? 'Black' : 'Green'
//     }
//     return newInvitation
// })

// console.log(newInvitations)



// const newInvitations = invitations.map( invitation => {
//     let vipornot

//     if (invitation.vip === true) {
//         vipornot = 'Black'
//     }
//     else{
//         vipornot = 'Green'
//     }

//     const newInvitation = {
//         name: invitation.name,
//         vip: invitation.vip,
//         sector: vipornot
//     }
//     return newInvitation
// })

// console.log(newInvitations)