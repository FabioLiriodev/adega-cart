import chalk from "chalk";


const promptRegisterValidation = [
    {
        name:"validation",
        description: chalk.red("Deseja confirmar o cadastro do vinho? (1 - Sim e 2 - Nao)"),
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true
    }
]

export default promptRegisterValidation;