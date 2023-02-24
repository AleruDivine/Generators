
function* generator() {
yield 9;
}
const generator = generators();
console.log(generator.next());

function* jsGenerator() {
  yield 'Messi';
  yield 10;
  yield 11;
  yield 12;
}

const generator = jsGenerator();

console.log(generator.next());
console.log(generator.throw());
console.log(generator.next());


function* jsGenerator() {
let j = 0;
while (true){
  j++;
  yield j * 10;
  
}
}

const generator = jsGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next().value);


const games = ["COD", "Candycrush", "Minecraft", "Apex Legends"];

for (let n of games) {
  console.log(n);
}


let gamesIter = games[Symbol.iterator]()
console.log(gamesIter.next())
console.log(gamesIter.next())
console.log(gamesIter.next())
console.log(gamesIter.next())
console.log(gamesIter.next())