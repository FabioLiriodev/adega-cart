Regras de negócio:

Objetivo: desenvolver uma aplicação capaz de executar o gerenciamento de um sistema de e-commerce de uma adega.

Funcionalidades:

1) Criar o vinho como objeto com seus atributos --> função createWine() ✅
2) Adicionar garrafas de vinho ao carrinho de compras --> função addWineToCart()  ✅
3) Mostrar os itens presentes no carrinho de compras --> função displayCart() ✅
4) Remover garrafas de vinho do carrinho de compras;
5) Deletar garrafas de vinho do carrinho de compras;
6) Calcular o subtotal da compra de cada vinho em função do preço e quantidade de garrafas --> wine.subtotal() ✅
7) Criar uma função que calcula a idade do vinho --> wine.age() ✅
7) Calcular o total do valor da compra ao somar o preço de todos os itens;
8) Classificar os vinhos pela seu tipo (branco, tinto ou espumante) --> função sortWinesByTypeofWine() ✅
9) Classificar os vinhos pela seu tipo de uva (Cabernet Sauvignon, Merlot, Tempranillo) --> função sortWinesByTypeofGrape() ✅
10) Classificar os vinhos pela sua nacionalidade --> função sortWinesByOrigin() ✅
11) Classificar os vinhos pelo seu preço --> função sortWinesByPrice() ✅
12) Classificar os vinhos por ordem alfabética --> função sortWinesByAlphabeticalOrder() ✅
13) Classificar os vinhos por safra --> função sortWinesByHarvest() ✅


const wine1 = new Wine ("Almaviva", "Tinto","Cabernet Sauvignon", "Chile", 2021, 2900, 3);
const wine2 = new Wine ("Catena Zapata", "Tinto","Malbec", "Argentina", 2022, 1350, 5);
const wine3 = new Wine ("Sassicaia", "Tinto","Cabernet Sauvignon", "Itália", 2020, 3800, 1);
const wine4 = new Wine ("Château Margaux", "Tinto","Cabernet Sauvignon", "França", 2017, 12000, 2);
const wine5 = new Wine ("Vega Sicilia Único", "Tinto","Tempranillo", "Espanha", 2013, 5500, 6);
const wine6 = new Wine ("Dom Pérignon", "Espumante","Chardonnay", "França", 2013, 2600, 5);
const wine7 = new Wine ("Brunello di Montalcino", "Tinto","Sangiovese", "Itália", 2020, 1490, 2);
const wine8 = new Wine ("Cloudy Bay", "Branco","Sauvignon Blanc", "Nova Zelândia", 2024, 420, 7);
const wine9 = new Wine ("Penfolds Grange", "Tinto","Shiraz", "Austrália", 2018, 6500, 10);
const wine10 = new Wine ("Miolo Lote 43", "Tinto","Merlot", "Brasil", 2022, 315, 12);
const wine11 = new Wine ("Guaspari Vista do Chá","Tinto", "Syrah", "Brasil", 2020, 398, 2);
const wine12 = new Wine ("Casa Valduga Leopoldina Gran Reserva", "Branco", "Chardonnay", "Brasil", 2023, 190, 3);
const wine13 = new Wine ("Pizzato Merlot Reserva", "Tinto", "Merlot", "Brasil", 2021, 150, 4);
const wine14 = new Wine ("Salton Ouro Moscatel", "Espumante", "Moscato", "Brasil", 2021, 90, 8);
const wine15 = new Wine ("Opus One", "Tinto","Bordeaux", "Estados Unidos", 2019, 5200, 5);


removeWine(quantity) {
    if(this.quantity < quantity) {
        console.log("A quantidade informada é maior do que a quantidade disponível!");
        return false
    }
    this.quantity -= quantity;
    return true
}

,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine ,
                          new Wine 