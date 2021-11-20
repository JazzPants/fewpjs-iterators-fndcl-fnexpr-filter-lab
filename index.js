// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const driversObj = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];



function findMatching(array, driver) {
    let matchingDriver = array.filter(x => {
        return x.toUpperCase() === driver.toUpperCase(); //removing case sensitivity
    })
    return matchingDriver;
}

function fuzzyMatch(array, driver) {
    let firstLetterDriver = array.filter(x => {
        return x.charAt(0) === driver.charAt(0);
    })
    return firstLetterDriver;
}

function matchName(array, element) {
    let objName = array.filter(x => {
        return x.name === element; //or x["name"]
    })
    return objName;
}

console.log(findMatching(drivers, "Sammy"));

console.log(fuzzyMatch(drivers, "S"));

console.log(matchName(driversObj, "Bobby"))


//LAB SOLUTION
// function findMatching(source, sought) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase() === sought.toLowerCase()
//     )
//   }
  
//   function fuzzyMatch(source, testString) {
//     return source.filter( possibleMatch =>
//       possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0 
//     )
//   }
//   ////e.g. checking for first letter regardless of lowercase or uppercase
//   //possibleMatch.toLowerCase() | e.g. Jason -> jason
//   //indexOf(testString.toLowerCase()) | J -> j
//   //


//   function matchName(source, soughtName) {
//     return source.filter( record => record.name === soughtName)
//   }