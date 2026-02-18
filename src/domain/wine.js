//criar o item garrafa de vinho com as informações relevantes

let counter = 0;

export default class Wine {
    id;
    name;
    typeOfWine;
    typeOfGrape;
    origin;
    harvest;
    price;

    constructor (name, typeOfWine, typeOfGrape, origin, harvest, price) {
        this.id = ++counter;
        this.name = name;
        this.typeOfWine = typeOfWine;
        this.typeOfGrape = typeOfGrape;
        this.origin = origin;
        this.harvest = harvest;
        this.price = price;
    }
}


