import generateRandomBatchNumber from "./utils/batch.js";

async function handle(params) {
    let characters = [];
    let batch = "";

    const batchLength = process.env.BATCH_LENGTH;
    characters = await generateRandomBatchNumber();

    for (let i = 0; i < batchLength; i++) {
        const index = Math.floor(Math.random() * characters.length)
        batch += characters[index]
    }
    return batch
}

export default handle;