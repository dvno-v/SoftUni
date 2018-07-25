function a(matrix, commands) {
    let polutedAreas = [];
    matrix = matrix.map(a => a.split(" ")).map(a => a.map(Number));
    for (let command of commands) {
        let force = command.split(/\s+/gm)[0].toLowerCase();
        let value = Number(command.split(/\s+/gm)[1]);
        switch (force) {
            case'breeze':
                for (let row = 0; row < matrix.length; row++) {
                    if (row == value)
                        for (let col = 0; col <matrix[row].length; col++) {
                                matrix[row][col]-=15;
                                if(matrix[row][col] < 0){
                                    matrix[row][col] = 0;
                                }
                        }
                }
                break;
            case"gale":
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix[row].length; col++) {
                        if (col == value) {
                            matrix[row][col] -= 20;
                            if(matrix[row][col] < 0){
                                matrix[row][col] = 0;
                            }
                        }
                    }
                }
                break;
            case"smog":
                for (let row = 0; row < matrix.length; row++) {
                    for (let col = 0; col < matrix.length; col++) {
                        matrix[row][col] += Number(value
                        );
                    }
                }
                break;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50) {
                let polutedArea = [row, col];
                polutedAreas.push(polutedArea);
            }
        }
    }
    let result = [];
    if (polutedAreas.length != 0) {
        for (let i = 0; i < polutedAreas.length; i++) {
            let coordinates = "[" + polutedAreas[i].join("-") + "]";
            result.push(coordinates);
        }
        console.log(`Polluted areas: ${result.join(", ")}`)
        return;
    }
    console.log("No polluted areas")
}

a([     "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",]
    ,["breeze 1", "gale 2", "smog 25"]
)
a([     "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35", "breeze 1", "breeze 1", "breeze 1", "breeze 1", "smog 100"])
a([     "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",],
    [   "smog 11", "gale 3",
        "breeze 1", "smog 2"
    ]);