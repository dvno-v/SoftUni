function prices([movie, day]) {
    movie = movie.toLowerCase();
    day = day.toLowerCase();
    let price = "";
    switch (day) {
        case 'monday':
            switch (movie) {
                case"the godfather":
                    price = "12";
                    break;
                case "schindler's list":
                    price = "8.50";
                    break;
                case "casablanca":
                    price = "8";
                    break;
                case "the wizard of oz":
                    price = "10";
                    break;
                default: price = "error";
                break;
            }
            break;
        case 'tuesday':
            switch (movie) {
                case"the godfather":
                    price = "10";
                    break;
                case "schindler's list":
                    price = "8.50";
                    break;
                case "casablanca":
                    price = "8";
                    break;
                case "the wizard of oz":
                    price = "10";
                    break;
                default: price = "error";
                    break;
            }
            break;
        case 'wednesday':
            switch (movie) {
                case"the godfather":
                    price = "15";
                    break;
                case "schindler's list":
                    price = "8.50";
                    break;
                case "casablanca":
                    price = "8";
                    break;
                case "the wizard of oz":
                    price = "10";
                    break;
                default: price = "error";
                    break;
            }
            break;
        case 'thursday':
            switch (movie) {
                case"the godfather":
                    price = "12.50";
                    break;
                case "schindler's list":
                    price = "8.50";
                    break;
                case "casablanca":
                    price = "8";
                    break;
                case "the wizard of oz":
                    price = "10";
                    break;
                default: price = "error";
                    break;
            }
            break;
        case 'friday':
            switch (movie) {
                case"the godfather":
                    price = "15";
                    break;
                case "schindler's list":
                    price = "8.50";
                    break;
                case "casablanca":
                    price = "8";
                    break;
                case "the wizard of oz":
                    price = "10";
                    break;
                default: price = "error";
                    break;
            }
            break;
        case 'saturday':
            switch (movie) {
                case"the godfather":
                    price = "25";
                    break;
                case "schindler's list":
                    price = "15";
                    break;
                case "casablanca":
                    price = "10";
                    break;
                case "the wizard of oz":
                    price = "15";
                    break;
                default: price = "error";
                    break;
            }
            break;
        case 'sunday':
            switch (movie) {
                case"the godfather":
                    price = "30";
                    break;
                case "schindler's list":
                    price = "15";
                    break;
                case "casablanca":
                    price = "10";
                    break;
                case "the wizard of oz":
                    price = "15";
                    break;
                default: price = "error";
                    break;
            }
            break;
        default:
            price = "error";
            break;
    }
    console.log(price);
}


prices(["the godfather", "friday"]);