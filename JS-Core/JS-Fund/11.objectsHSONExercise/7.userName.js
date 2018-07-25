function a(strArr) {
    let nicknames = new Set()
    for (let name of strArr) {
        nicknames.add(name);
    }
    let sorted = [...nicknames].sort((a,b) => {
        if(a.length !== b.length){
            return a.length - b.length
        }
        else{
           return a.localeCompare(b);
        }
    });
    console.log(sorted.join("\n"));
}

a([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy'
])