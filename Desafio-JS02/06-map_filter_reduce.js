/* EXERCICIO 5:
→ Adicione 10% no valor de mercado das empresas. 
→ Filtrar as empresas com data de fundação antes de 2000 e somar o valor de mercado acumulado delas.
*/

// const companies = [
//     { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
//     { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
//     { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
//     { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
//     { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
//     { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
// ]

// const allmarketValues = company => {
//     company.marketValue + (company.marketValue * 0.10).toFixed(0)
//     return company
// }

// const bestCompanies = companies.map(allmarketValues)
// .filter(company => company.foundedOn < 2000 )
// .reduce( (acc, current) => acc + current.marketValue, 0)

// console.log(bestCompanies)

// const bestCompanies = companies.map(company => {
//     company.marketValue + (company.marketValue * 0.10).toFixed(0)
//     return company
// })
//     .filter(company => company.foundedOn < 2000)
//     .reduce((acc, current) => acc + current.marketValue, 0)

// console.log(bestCompanies)