import Wine from "../domain/wine.js";

export default class Database {

   static WINE_DATABASE = new Map ([
        [1, new Wine("Almaviva", "Tinto", "Cabernet Sauvignon", "Chile", 2021, 2900, 1.2 )],
        [2, new Wine("Catena Zapata", "Tinto", "Malbec", "Argentina", 2022, 1350, 1.1)],
        [3, new Wine("Sassicaia", "Tinto", "Cabernet Sauvignon", "Itália", 2020, 3800, 1.15 )],
        [4, new Wine("Château Margaux", "Tinto", "Cabernet Sauvignon", "França", 2017, 12000, 1.1 )],
        [5, new Wine("Vega Sicilia Único", "Tinto", "Tempranillo", "Espanha", 2013, 5500, 1.05)],
        [6, new Wine("Dom Pérignon", "Espumante", "Chardonnay", "França", 2013, 2600, 1.08)],
        [7, new Wine("Brunello di Montalcino", "Tinto", "Sangiovese", "Itália", 2020, 1490, 1.2)],
        [8, new Wine("Cloudy Bay", "Branco", "Sauvignon Blanc", "Nova Zelândia", 2024, 420, 1.1)],
        [9, new Wine("Penfolds Grange", "Tinto", "Shiraz", "Austrália", 2018, 6500, 1.05 )],
        [10, new Wine("Guaspari Vista do Chá", "Tinto", "Syrah", "Brasil", 2020, 398, 1.1)],
        [11, new Wine("Casa Valduga Leopoldina Gran Reserva", "Branco", "Chardonnay", "Brasil", 2023, 190, 1.1)],
        [12, new Wine("Pizzato Merlot Reserva", "Tinto", "Merlot", "Brasil", 2021, 150, 1.05)],
        [13, new Wine("Salton Ouro Moscatel", "Espumante", "Moscato", "Brasil", 2021, 90, 1.07 )],
        [14, new Wine("Opus One", "Tinto", "Bordeaux", "Estados Unidos", 2019, 5200, 1.30)],
        [15, new Wine("Miolo Lote 43", "Tinto", "Merlot", "Brasil", 2022, 315, 1.05)]
    ])

    static findById(id) {
        let wine = Database.WINE_DATABASE.get(id);
        if(wine) {
            return wine;
        }
        console.log("Vinho não existente no banco de dados!")
    }

}