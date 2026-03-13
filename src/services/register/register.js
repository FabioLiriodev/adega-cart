import promptWineRegister from "../../prompt-schema/schema-wine-register.js";
import prompt from "prompt";
import Wine from "../../domain/wine.js";
import chalk from "chalk";
import Database from "../../database/database.js";
import promptRegisterValidation from "../../prompt-schema/schema-register-validation.js";
import main from "../../index.js"
import promptAdditionalRegister from "../../prompt-schema/schema-additional-register.js";
import handleRegister from "./handler-register.js";

async function wineRegister() {
    let wine;

    prompt.get(promptWineRegister, async (err, result) => {
        if(err) chalk.red("[Register] - Erro ao executar o registro!");
    
    prompt.start();
        
        wine = new Wine(result.label, result.type, result.grape, result.origin, result.region, result.harvest, result.price, result.sellingmargin, result.alcoholcontent, result.volume);
    
    console.table(wine);

    prompt.get(promptRegisterValidation, async (err, choose) => {
        if(err) chalk.red("[Validation] - erro ao executar a validação de cadastro");
        if(choose.validation == 1)  {
            Database.insertWine(wine);
            console.table(Database);
        
    prompt.get(promptAdditionalRegister, async (err,choose) => {
        if(err) chalk.red("[New Add] - erro ao tentar adicionar um novo produto!");
        if(choose.newadd == 1) await wineRegister();
        if(choose.newadd == 2) await main();
    })
        }
        if(choose.validation == 2) await handleRegister();
    });

    });

}

export default wineRegister;