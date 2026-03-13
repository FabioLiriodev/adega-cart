import chalk from "chalk";

const promptWineRegister = [
    {
        name:"label",
        description: chalk.green("Digite o nome do vinho: "),
        required: true,
    },
    {
        name:"type",
        description: chalk.green("Digite o tipo de vinho: "),
        required: true,
    },
    {
        name:"grape",
        description: chalk.green("Digite o tipo de uva: "),
        required: true,
    },
    {
        name:"origin",
        description: chalk.green("Digite a origem do vinho: "),
        required: true,
    },
    {
        name:"region",
        description: chalk.green("Digite a região do vinho: "),
        required: true,
    },
    {
        name:"harvest",
        description: chalk.green("Digite a safra do vinho: "),
        pattern: /^[0-9-.]+$/,
        required: true,
    },
    {
        name:"price",
        description: chalk.green("Digite o preço unitário (R$): "),
        pattern: /^[0-9-.]+$/,
        required: true,
    },
    {
        name:"sellingmargin",
        description: chalk.green("Digite a margem de lucro: "),
        pattern: /^[0-9-.]+$/,
        required: true,
    },
    {
        name:"alcoholcontent",
        description: chalk.green("Digite o teor alcoólico do vinho: "),
        pattern: /^[0-9-.]+$/,
        required: true,
    },
    {
        name:"volume",
        description: chalk.green("Digite a quantidade de mL da garrafa: "),
        pattern: /^[0-9-.]+$/,
        required: true,
    },
]

export default promptWineRegister;