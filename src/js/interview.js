/**
//i. Implement the sorting of array in alphabetical order in the function sort_array.
//ii. Inside the function api_integration, integrate with https://dictionaryapi.dev/ and get the definition(s) of durian.
//iii. Using the word rainbow, create an array of objects, where each character is the label and is assigned to a random colour. 
       The object should have the format of { label: "a", colour: "#000000" }. Implement this in the function rainbow_colours.
 **/
function sort_array(arr) {
    arr.sort();                
    return arr;
}
var demoArray = ['dog','zebra','cat','cow','ant','bee'];
console.log(sort_array(demoArray));

function api_integration(word) {
  var definitionsArr = [];
  var uri = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
  return fetch(uri)
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.forEach(item => {
        item.meanings.forEach(meaning => {
          meaning.definitions.forEach((definition, index) => {
            definitionsArr.push(definition.definition);
          });
        });
      });
      return definitionsArr;
    })
    .catch(error => console.log(error));
}
var str = "durian"
api_integration(str)
  .then(definitionsArr => {
    console.log(definitionsArr);
  });


function rainbow_colours(word) {
  var arr = ['#000000', '#FFFFFF', '#FF2D00', '#FFF300', '#0000FF', '#00FF04', '#006CFF'];
  var wordSplit = word.split('');
  var generateColor = () => 
  arr[Math.floor(Math.random() * arr.length)];

  var rainbowArr = wordSplit.map(letter => 
  ({label:letter, color:generateColor() })
  );
  return rainbowArr;
}

var word = "rainbow";
console.log(rainbow_colours(word));
