async function generateRandomBatchNumber(params) {
    let batch = [];

    if(process.env.UPPERCASE_LETTERS === "true") {
        batch.push(..."ABCDEFGHIJKLMNOPQRSTUVYXZW")
    }
    if(process.env.LOWERCASE_LETTERS === "true") {
        batch.push(..."abcdefghijklmnopqrstuvwyxz")
    }
    if(process.env.NUMBERS === "true") {
        batch.push(..."0123456789")
    }

    return batch
}

export default generateRandomBatchNumber;