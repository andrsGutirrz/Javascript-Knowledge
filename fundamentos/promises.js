// PoC of callbacks in Js

/*
console.log('a')
setTimeout(() => console.log('b'), 0)
console.log('c')
*/

/*
setTimeout(()=>console.log('d'),2000)
for (let i = 0; i< 1000000000;i++){
  // will take a lot of secods, timeout is any secure
}
*/


// using swapi
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL= 'people/:id'

const lukeurl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain: true}

const onCharacterResponse = function(character){
  console.log(`Hello, Im ${character.name}`)
}

function getCharacter(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get(url,opts,onCharacterResponse)

}
function getCharacter(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $.get(url,opts,onCharacterResponse)

}

/*
console.log('a')
for (let i=0; i<4; i++){
  getCharacter(i);
  console.log(`Righ now ${i}`)
}
*/
/*
function getCharacterNested(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
  $
  .get(url,opts,callback)
  .fail(function(){
    console.log(`Error getting id: ${id}`)
  })
}

getCharacterNested(1, function(character){
    console.log(`Hello, Im ${character.name}`);

  getCharacterNested(2,function(character){
    console.log(`Hello, Im ${character.name}`);

    getCharacterNested(3,function(character){
      console.log(`Hello, Im ${character.name}`);

      getCharacterNested(4,function(character){
        console.log(`Hello, Im ${character.name}`);

        getCharacterNested(5,function(character){
          console.log(`Hello, Im ${character.name}`);

          getCharacterNested(6,function(character){
            console.log(`Hello, Im ${character.name}`);

            console.log(`Request fullfiled`)
          })
        })
      })
    })
  })
})
*/

function getCharacterPromise(id){

  return new Promise((resolve, reject) => {

    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $
    .get(url,opts,function(data){
      resolve(data)
    })
    .fail(function(){
      reject(id)
    })
  })
}
/*
getCharacterPromise(1)
.then(function(character){
  console.log(`Hello, Im ${character.name}`);
  return getCharacterPromise(2)
})
.then(function(character){
  console.log(`Hello, Im ${character.name}`);
  return getCharacterPromise(3)
})
.then(function(character){
  console.log(`Hello, Im ${character.name}`);
  return getCharacterPromise(4)
})
.then(function(character){
  console.log(`Hello, Im ${character.name}`);
  return getCharacterPromise(5)
})
.catch(function(id){
  console.log(`Error getting ${id}`)
})
.finally(function(){
  console.log('request fullfiled')
})
*/

/*
var ids = [1,2,3,4,5,6,7,8,9]
var promises = ids.map(id =>  getCharacterPromise(id))
Promise
  .all(promises)
  .then(characters => console.log(characters))
  .catch(function(){
    console.log('Big error')
  })
*/

// Async await

async function getAllCharacters(){
  var ids = [1,2,3,4,5,6,7,8,9]
  var promises = ids.map(id =>  getCharacterPromise(id))
  try {
    var characters = await Promise.all(promises)
    console.log(characters)
  } catch (e) {
    console.log('Error on Asyn await')
  } finally {
    console.log('finally')
  }
}


getAllCharacters()
