function result(ticketArr, sorting) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let ticketCommand of ticketArr) {
        let ticketTokens = ticketCommand.split("|");
        let ticket = new Ticket(ticketTokens[0], ticketTokens[1], ticketTokens[2]);
        result.push(ticket)
    }
    result = result.sort((a, b) => {
            if (typeof a[sorting] !== "number") {
                return a[sorting].localeCompare(b[sorting])
            }
            return a[sorting] - b[sorting];
        });
    return result;
}

console.log(result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));
console.log("-------------")
console.log(result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

