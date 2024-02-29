function sort_array(arr) {
    const n = [...arr]
    n.sort()
    return n;
}

function api_integration() {
    const word = 'durian'
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(resp => resp.json())
        .then(result => result[0]['meanings']
            .flatMap(meaning => meaning['definitions'].map(e => e['definition']))
        )
}

function rainbow_colours() {
    const hex_code = () => {
        return Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')
    }
    return [...'rainbow'].map(c => {
        return {label: c, colour: `#${hex_code()}`}
    });
}

function test() {
    console.log(sort_array(['wdc', 'efcd', '12ews', 'azz', 'z']))
    api_integration().then(r => console.log(r))
    console.log(rainbow_colours())
}
test()
