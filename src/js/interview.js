//Sorting Method 1: In-Built sort() method
function sort_array1(arr1) {
    // Implement your code here
    return arr1.sort(); //Alphabetically ascending
    //return arr1.sort().reverse(); //Alphabetically descending 
}

let unsortedArray1 = ['red','green','blue','yellow','orange','violet','indigo'];
console.log(sort_array1(unsortedArray1)); //Output: ["blue", "green", "indigo", "orange", "red", "violet", "yellow"]

//Sorting Method 2: Bubble Sort method (unsuitable for large amount of data)
function sort_array2(arr2) {
    // Implement your code here
    //Outer loop reduces number of elements iterated over by 1 every pass; largest element bubbles to the end when i=0
    for (let i = 0; i < arr2.length - 1; i++) {
        //Inner loop shifts "largest" element to the rightmost end  
        for (let j = 0; j < arr2.length - 1 - i; j++) {
            //to change output to alphabetically descending, use '<' to shift smallest element to the rightmost end
            if (arr2[j] > arr2[j + 1]) {
                // Swap elements
                let temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
            }   
        }
    }
    return arr2;
}

let unsortedArray2 = ['red','green','blue','yellow','orange','violet','indigo'];
console.log(sort_array2(unsortedArray2)); //Output: ["blue", "green", "indigo", "orange", "red", "violet", "yellow"]

// ===================

//Integration of API and definition(s) of 'durian' 
//define and declare asynchronous function that accepts parameter 'word'; allows use of 'await'
async function api_integration(word) {
    //initializes empty array to store definition(s) from API
    var definitions = [];
    // Implement your code here
    //'try' block; allows exception handling to take place within the block
    try{
        //'fetch' function performs asynchronous HTTP GET request to API using 'word' paramenter
        //'await' pauses execution until promise returned by 'fetch' is resolved
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        //Parses response from API into JSON format 
        const data = await response.json();

        //Conditional statement: if 'data' variable contains valid data and is not an empty array
        if (data && data.length > 0) {
            //for each entry in 'data' array, extracts definition(s) from the Response
            //"meanings", "definitions", "definition"; part of the Response array (nested) 
            //lambda expressions / arrow functions
            data.forEach(e => {
                if (e.meanings && e.meanings.length > 0) {
                    e.meanings.forEach(m => {
                        if (m.definitions && m.definitions.length > 0) {
                            //extracts definition(s) from obeject 'd' and adds it to 'definitions' array 
                            m.definitions.forEach(d => {
                                definitions.push(d.definition);
                            });
                        }
                    });
                }
            });
        }
    //'catch' block; logs error message with error object to console if exception occurs during 'fetch' operation
    } catch (error) {
        console.error('Fetch operation issue', error);
    }    
    return definitions;
}

api_integration('durian').then(definitions => {
    console.log('Definitions:', definitions);
}); //Output: ["Any of several trees, genus Durio, of Southeast Asia.", "The spiky edible fruit of this tree, known for its strong taste and very strong, unpleasant odor.", "A yellow colour, like that of durian flesh (also called durian yellow)."]

// ===================

//Create an array of objects and assign each character to a random colour 
function rainbow_colours() {
    var arr = [];
    // Implement your code here
    function randomColour() {
        //initializes string variable 'characters', containing valid characters used in hexadecimal colour codes 
        var characters = '0123456789ABCDEF';
        //initializes 'colour' variable, where'#' symbol denotes hexadecimal colours in CSS
        var colour = '#';
        //Loop iterates 6 times to generate 6 random characters after '#'
        for (var i = 0; i < 6; i++) {
            //'characters' appended to 'colour' variable
            //'Math.random() * 16' returns number from 0(inclusive) to 16(exclusive), and multiplies that number by 16 to ensure it falls within the indices of the 'characters' string
            //'Math.floor()' rounds down the number generated to the nearest integer
            colour += characters[Math.floor(Math.random() * 16)];
        }
        return colour;
      }

    // //To avoid the use of multiple 'For' Loops (ChatGPT)
    // function randomColour() {
    //     //16777215 corresponds to #FFFFFF (maximum hexadecimal colour value); multiplication with 'Math.random' ensures number generated falls within the valid range #000000 - #FFFFFF
    //     //'toString(16)' converts number obtained into a hexdecimal string 
    //     return '#' + Math.floor(Math.random() * 16777215).toString(16);
    // }

    //Defines string variable letter
    var letter = "rainbow";
    //Loops through reach letter of "rainbow", creating 2 properties: label and colour
    //New object is pushed into 'arr' array
    for (var j = 0; j < letter.length; j++) {
        arr.push({ label: letter[j], colour: randomColour() });
    }

    return arr;
}

var result = rainbow_colours();
console.log(result); //Example Output: [{label: "r", colour: "#048B0C"}, {label: "a", colour: "#0B2F46"}, ..., {label: "w", colour: "#649039"}] 