import Database from "../database/database.js";
import StorageItem from "../domain/StorageItem.js";

export default class StorageService {
        storage = new Map(); //<wine.id, storageItem>


addToStorage(wine, quantity) {
    let storageItem = this.storage.get(wine.id);
    if(storageItem == undefined) {
        storageItem = new StorageItem(wine, quantity);
        this.storage.set(wine.id, storageItem);

    } else {
        storageItem.addItem(quantity);
    }
}

removeFromStorage(wine, quantity) {
    let storageItem = this.storage.get(wine.id);
    if(storageItem !== null) {
        return storageItem.removeItem(quantity);
    } 
        console.log("[removeFromStorage] - Item indisponível no estoque!");
        return -1;
}

}