class CartFilters {
    wineListFilter;
}


async function sortWinesByAlphabeticOrder(list) {
        console.table(list.sort((a,b) => {
        const nameA = a.name.trim();
        const nameB = b.name.trim();

        return nameA.localeCompare(nameB);
    }));
}

async function sortWinesByTypeOfWine(list) {
    console.table(list.sort((a,b) => {
        const typeOfWineA = a.typeOfWine.trim();
        const typeOfWineB = b.typeOfWine.trim();

        return typeOfWineA.localeCompare(typeOfWineB);
    }))
}

async function sortWinesByTypeOfGrape(list) {
    console.table(list.sort((a,b) => {
        const typeOfGrapeA = a.typeOfGrape.trim();
        const typeOfGrapeB = b.typeOfGrape.trim();

        return typeOfGrapeA.localeCompare(typeOfGrapeB);
    }))
}

async function sortWinesByPrice(list) {
   return console.table(list.sort((a,b) => a.price - b.price));
}

async function sortWinesByHarvest(list) {
  return console.table(list.sort((a,b) => a.harvest - b.harvest));
}

async function sortWinesByOrigin(list) {
    console.table(list.sort((a,b) => {
        const originA = a.origin.trim();
        const originB = b.origin.trim();

        return originA.localeCompare(originB);
    }))
}

async function sortWinesByQuantify(list) {
    return console.table(list.sort((a,b) => a.quantity - b.quantity));
}

export {
    sortWinesByAlphabeticOrder,
    sortWinesByHarvest,
    sortWinesByPrice,
    sortWinesByQuantify,
    sortWinesByTypeOfWine,
    sortWinesByTypeOfGrape,
    sortWinesByOrigin
};