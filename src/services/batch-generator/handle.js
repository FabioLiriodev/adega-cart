import handle from "./create.js"
import chalk from "chalk"

async function createBatch(params) {
    const batch = await handle();

    console.log(chalk.yellow("O número de lote do vinho é:" + batch));

}

export default createBatch;