import prompt from "prompt";
import chalk from "chalk";

const promptSchemaMain = [
    {
        name:"select",
        description: chalk.yellow(`Selecione: 1-Cadastrar Vinho; 2-Banco de dados; 3-Abortar`),
        pattern: /^[1-3]+$/,
        message: chalk.red("Escolha apenas 1, 2 ou 3"),
        required:true,

    },
];

async function promptGet() {
    return new Promise((resolve, reject) => {
        prompt.get(promptSchemaMain, (err, choose) => {
            if (err) {
                console.log(chalk.red("[Launcher] - Erro ao iniciar a aplicação"));
                reject(err); // Rejeita a promise em caso de erro
                return;
            }
            
            // Resolve a promise com o valor que você quer retornar
            resolve(choose.select);
        });
         prompt.start();
    });
}


export { promptSchemaMain, promptGet };