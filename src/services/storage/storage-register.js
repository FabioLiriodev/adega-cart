import StorageItem from "../../domain/StorageItem";
import Wine from "../../domain/wine.js";
import { promptSchemaStorageAdd, promptGetStorageAdd } from "../../prompt-schema/schema-storage-add.js"

export default class StorageService {
        storage = new Map();
}

async function storageRegister() {
    prompt.get(promptSchemaStorageAdd, async (err, result) => {
        if(err) chalk.red("[Register] - Erro ao tentar executar o registro no estoque!");
    
    prompt.start();
        
        let storageItem = this.storage.get(wine.id);
            if(storageItem == undefined) {
                storageItem = new StorageItem(wine,quantity,wine.price);
                this.storage.set(wine.id, storageItem);
        
            } else {
                storageItem.addItem(quantity, wine.price);
            }
    
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
