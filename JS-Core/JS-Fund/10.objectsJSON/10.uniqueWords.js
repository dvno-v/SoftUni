function a(strArr) {
    let uniqueWords = new Set();
    strArr.reduce((a,b) => a + b).split(/\W+/g).filter(a => a.length>0).map(w => w.toLowerCase()).forEach(a => uniqueWords.add(a));
    console.log([...uniqueWords].join(", "))
}

a(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);