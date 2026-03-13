import chalk from "chalk";
import prompt from "prompt";

const promptSchemaStorage = [
    {
        name:"select",
        description: chalk.yellow("Opções: 1-Adicionar vinho ao estoque; 2-Remover vinho do estoque; 3-Banco de dados; 4-Abortar"),
        pattern: /^[1-4]+$/,
        message: chalk.red("Escolha apenas 1, 2, 3 ou 4"),
        required:true,

    },
];

async function promptGetStorage() {
    return new Promise((resolve, reject) => {
        prompt.start();

        prompt.get(promptSchemaStorage, (err, choose) => {
            if (err) {
                console.log(chalk.red("[Storage] - Erro ao iniciar a gestão de estoque"));
                reject(err);
                return;
            }
            resolve(choose.select);
        });
        
    });
}

export { promptSchemaStorage, promptGetStorage };