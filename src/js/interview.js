function sort_array(arr) {
    // Implement your code here
    return arr.map(String).sort();
}

async function api_integration() {
    var definitionsArray = [];
    // Implement your code here
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/durian";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data && data.length > 0 && data[0].meanings) {
            data[0].meanings.forEach(meaning => {
                if (meaning.definitions) {
                    meaning.definitions.forEach(definition => {
                        definitionsArray.push(definition.definition);
                    });
                }
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return definitionsArray;
}

function rainbow_colours() {
    var arr = [];
    // Implement your code here

    const word = "rainbow";

    for (var i = 0; i < word.length; i++) {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        const label = word[i];
        arr.push({ label, colour: color });
    }

    return arr;
}