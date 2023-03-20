const brain = require("brain.js")
const data = require("./data.json")

const network = new brain.recurrent.LSTM()

trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const output = network.run("i swapped the memory");


console.log(`Category: ${output}`);