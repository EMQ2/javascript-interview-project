function sort_array(arr) {
  // convert the numbers to strings for alphabetical comparison
  arr.sort((a, b) => a.toString().localeCompare(b.toString()));
  return arr;
}

async function api_integration(word) {
  // initialize an empty array to store definition(s) from API
  let definitions = [];

  try {
    // GET request to the dictionary API
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );

    // check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    // parse the JSON response
    const data = await response.json();

    // extract definitions from the response data
    data.forEach((entry) => {
      entry.meanings.forEach((meaning) => {
        // Access the first definition directly
        definitions.push(meaning.definitions[0].definition);
      });
    });
  } catch (error) {
    // if an error occurs, log it and return an empty array
    console.error("Error fetching data:", error);
    return [];
  }

  return definitions;
}

const wording = "durian";
api_integration(wording)
  .then((definitions) => {
    console.log(definitions);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

/* error: Uncaught TypeError: api_defs.map is not a function
    at interview_run (index.js:43:47)
    at index.js:51:1 */

function rainbow_colours(word) {
  word = "rainbow";
  // define an array of possible colors
  const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8B00FF",
  ];

  // initialize an empty array to store the objects
  const rainbow_data = [];

  // iterate over each character in the word
  for (let i = 0; i < word.length; i++) {
    // Get the current character
    const char = word[i];

    // pick a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // create an object with label and color properties
    const colorObject = { label: char, colour: randomColor };

    // add the object to the rainbow_data array
    rainbow_data.push(colorObject);
  }

  return rainbow_data;
}

const word = "rainbow";
const rainbow_data = rainbow_colours(word);
console.log(rainbow_data);
