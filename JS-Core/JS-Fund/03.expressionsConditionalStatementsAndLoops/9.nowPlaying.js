function playing(arr) {
    let trackName = arr[0];
    let artistName = arr[1];
    let duration = arr[2];

    console.log(`Now Playing: ${artistName} - ${trackName} [${duration}]`)
}

playing(['Number One', 'Nelly', '4:09'])