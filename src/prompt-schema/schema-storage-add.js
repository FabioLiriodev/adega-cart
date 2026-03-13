import chalk from "chalk";
import prompt from "prompt";

const promptSchemaStorageAdd = [
    {
        name:"addId",
        description: chalk.yellow("Digite o identificador do vinho a ser inserido no estoque"),
        pattern: /^[0-9]+$/,
        message: chalk.red("Escolha apenas o número de identificação do vinho"),
        required:true,

    },
    {
        name:"addQuantity",
        description: chalk.yellow("Digite a quantidade de garrafas a serem inseridas no estoque"),
        pattern: /^[0-9]+$/,
        message: chalk.red("Escolha apenas valores numéricos"),
        required:true,

    },
];

async function promptGetStorageAdd() {
    return new Promise((resolve, reject) => {
        prompt.start();

        prompt.get(promptSchemaStorageAdd, (err, choose) => {
            if (err) {
                console.log(chalk.red("[Storage] - Erro ao iniciar a gestão de estoque"));
                reject(err);
                return;
            }
            resolve(choose.select);
        });
        
    });
}

export { promptSchemaStorageAdd, promptGetStorageAdd };