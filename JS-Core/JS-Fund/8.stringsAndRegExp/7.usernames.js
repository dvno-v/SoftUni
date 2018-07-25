function solve(arr) {
    let usernames = []
    for(let i = 0; i<arr.length; i++){
        let mail = arr[i].split("@");
        let [username, domain] = [mail[0], mail[1].split('.').map(a => a[0]).join('')];
        usernames.push(username+ "." + domain);
    }

    console.log(usernames.join(', '));
}


solve(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])