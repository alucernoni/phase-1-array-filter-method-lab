// Code your solution here


function findMatching(collection, string) {
    const driversArray = [];
    for (const user of collection) {
      if (string.toLowerCase() === user.toLowerCase()) {
        driversArray.push(user)
      }
    }
    return driversArray
  }

//   function fuzzyMatch(collection, string) {
//     return collection.filter(function(letters) {
//       return letters.toLowerCase().indexOf(string.toLowerCase()) !== -1
//     })
//   }

function fuzzyMatch(collection, string) {
    return collection.filter(function(letters) {
      return letters.toLowerCase().substring(0,1).indexOf(string.toLowerCase().substring(0,1)) !== -1
    })
  }

  function matchName(collection, name) {
    return collection.filter(function(person) {
      if (name === person.name) {
        return true
      }
    })
  }