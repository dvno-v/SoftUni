function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onGradient);
    document.getElementById('gradient').addEventListener('mouseout', outOfGradient);

    function onGradient(event) {
        let x = event.offsetX;
        let width = document.getElementById('gradient').clientWidth - 1;
        let percentage = (x / width) * 100;
        document.getElementById('result').textContent = Math.trunc(percentage) + '%'
    }

    function outOfGradient(event) {
        document.getElementById('result').textContent = ""
    }
}