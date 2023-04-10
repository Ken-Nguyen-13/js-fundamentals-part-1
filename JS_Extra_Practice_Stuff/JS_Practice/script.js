const recipe = {
    title: "Mole",
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa']
}
console.log(recipe.title)
console.log(`Servings: ${recipe.servings}`)
console.log(recipe.ingredients[0])
console.log(recipe.ingredients[1])
console.log(recipe.ingredients[2])

//Second Exercise "The Reading List"
const books = [
    {title: "Spy School Goes North", author: "Stuart Gibbs", alreadyRead: false},
    {title: "Spy School At Sea", author: "Stuart Gibbs", alreadyRead: true},
    {title: "Spy School Goes South", author: "Stuart Gibbs", alreadyRead: true}
]
const book1 = `"${books[0].title}" by ${books[0].author}`
const book2 = `"${books[1].title}" by ${books[1].author}`
const book3 = `"${books[2].title}" by ${books[2].author}`
console.log(book1)
console.log(book2)
console.log(book3)

function haveReadYet(book, alreadyRead) {
    if(alreadyRead) {
        console.log(`I've already read ${book}.`)
    } else {
        console.log(`I haven't read ${book}.`)   
    }
}
haveReadYet(book1, books[0].alreadyRead);
haveReadYet(book2, books[1].alreadyRead);
haveReadYet(book3, books[2].alreadyRead);