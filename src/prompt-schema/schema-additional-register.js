import chalk from "chalk";


const promptAdditionalRegister = [
    {
        name:"newadd",
        description: chalk.bgGray(`\nDeseja adicionar mais vinhos? (1 - Sim e 2 - Nao)`),
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true
    }
]

export default promptAdditionalRegister;