import Wine from "../domain/wine.js";

export default class Database {

   static WINE_DATABASE = new Map ([]);

    static findById(id) {
        let wine = Database.WINE_DATABASE.get(id);
        if(wine) {
            return wine;
        }
        console.log("Vinho não existente no banco de dados!")
    }

    static insertWine(wine) {
        Database.WINE_DATABASE.set(wine.id, wine);
    }
}