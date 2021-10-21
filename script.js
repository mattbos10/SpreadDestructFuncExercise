// 1a
const jPDinos = [
    `Velociraptors`,
    `Tyrannosaurus Rex`,
    `Dilophosaurus`
];
// 1b
function restFunc(a, ...b) {
    console.log(a);
    console.log(b);
}
restFunc(...jPDinos);
/*
Velociraptors
[ 'Tyrannosaurus Rex', 'Dilophosaurus' ]
*/
console.log("============");
// 2a
const jPCharacters = {
    alanGrant: `Sam Neill`,
    ellieSattler: `Laura Dern`,
    ianMalcolm: `Jeff Goldblum`
};
// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);
console.log("============");
// 3a
const jurassicParkMovies = [
  {
    one: "Jurassic Park",
    two: "The Lost World: Jurassic Park",
    three: "Jurassic Park III",
  },
  {
    four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom",
    six: "Jurassic World: Dominion",
  }
];
// 3b
seeJPMovies = ([{ one, two, three}, {four, five, six}]) => {
  console.log(one);
  console.log(two);
  console.log(three);
  console.log(four);
  console.log(five);
  console.log(six);
}

seeJPMovies(jurassicParkMovies);


