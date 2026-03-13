//criar o item garrafa de vinho com as informações relevantes

let counter = 0;

export default class Wine {
    id;
    label;
    type;
    grape;
    origin;
    region;
    harvest;
    price;
    sellingmargin;
    alcoholcontent;
    volume;

    constructor (label, type, grape, origin, region, harvest, price, sellingmargin, alcoholcontent, volume) {
        this.id = ++counter;
        this.label = label;
        this.type = type;
        this.grape = grape;
        this.origin = origin;
        this.region = region;
        this.harvest = harvest;
        this.price = price;
        this.sellingmargin = sellingmargin;
        this.alcoholcontent = alcoholcontent;
        this.volume = volume;
    }
}


