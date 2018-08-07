let kinvey = (function () {
    const appKey = 'kid_H11gLmLSm';
    const appSecret = '00688dac0d264483a79f5ee3233b6ce8';
    const baseUrl = 'https://baas.kinvey.com/';

    function headersMaker(type) {
        if (type === "basic") {
            return {
                "Authorization": "Basic " + btoa(`${appKey}:${appSecret}`),
                "Content-Type": "application/json"
            };
        } else if (type === 'kinvey') {
            return {
                "Authorization": "Kinvey " + sessionStorage.getItem('authtoken'),
                "Content-Type": "application/json"
            };
        }
    }

    function saveUsersInfo(user) {
        sessionStorage.setItem("authtoken", user._kmd.authtoken);
        sessionStorage.setItem("userName", user.username);
        sessionStorage.setItem("firstName", user.name.split(" ")[0]);
        sessionStorage.setItem("lastName", user.name.split(" ")[1]);
        sessionStorage.setItem("phone", user.phone);
        sessionStorage.setItem("email", user.email);
    }

    function displayError(err) {
        console.log(err);
    }

    //register
    function registerUser(username, password, phone, email, name) {
        let firstName = name.split(" ")[0].trim();
        let lastName = name.split(" ")[1].trim();
        let user = JSON.stringify({username,password, phone, email, firstName, lastName});
        let req = {
            url: baseUrl + `user/${appKey}/`,
            method: "POST",
            headers: headersMaker("basic"),
            data: user,
            error: (e) => displayError(e.responseJSON.description)
        };
        let contactReq = {
            url: baseUrl + `appdata/${appKey}/contacts`,
            method: "POST",
            headers: headersMaker("kinvey"),
            data: user,
            success:registerSuccess,
            error: (e) => displayError(e.responseJSON.description)
        };

        // Promise.all([$.ajax(req), $.ajax(contactReq)]).then(function ([registerData, contact]) {
        //    registerSuccess(registerData);
        // });

        $.ajax(req);

        function registerSuccess(user) {
            saveUsersInfo(user);
            $.ajax(contactReq);
        }
    }

    //login
    function loginUser(username, password) {
        let user = JSON.stringify({username: username, password: password});
        let req = {
            url: baseUrl + `user/${appKey}/login`,
            method: "POST",
            headers: headersMaker("basic"),
            data: user,
            success: loginSuccess,
            error: (e) => displayError(e.responseJSON.description)
        };
        $.ajax(req);

        function loginSuccess(user) {
            saveUsersInfo(user);
        }
    }

    //logout
    function logoutUser() {
        let req = {
            url: baseUrl + `user/${appKey}/_logout`,
            method: "POST",
            headers: headersMaker("kinvey"),
            success: logoutSuccess,
            error: (e) => displayError(e.responseJSON.description)
        };
        $.ajax(req);

        function logoutSuccess(response) {
            sessionStorage.clear();
        }
    }
    async function getContacts() {
        let req = {
            url: baseUrl + `appdata/${appKey}/contacts`,
            headers: headersMaker("kinvey"),
            error: (e) => {
                displayError(e.responseJSON.description)
            }
        };
        let contacts = await $.ajax(req);
        return contacts;
    }
    return {
        registerUser, loginUser, logoutUser, getContacts
    }
})();