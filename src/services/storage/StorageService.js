import Database from "../../database/database.js";
import StorageItem from "../../domain/StorageItem.js";

export default class StorageService {
        storage = new Map();


addToStorage(wine, quantity) {
    let storageItem = this.storage.get(wine.id);
    if(storageItem == undefined) {
        storageItem = new StorageItem(wine,quantity,wine.price);
        this.storage.set(wine.id, storageItem);

    } else {
        storageItem.addItem(quantity, wine.price);
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

