const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_BkSAfPoVm';
const APP_SECRET = 'd5440f0f8fce48a394b0712218833519';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};
const BOOKS_PER_PAGE = 10;

//user login, logout, register, auth.,

function loginUser() {
    let username = $("#formLogin input[name='username']").val();
    let password = $("#formLogin input[name='passwd']").val();
    let req = {
        url: BASE_URL + `user/${APP_KEY}/login`,
        method: "POST",
        headers: AUTH_HEADERS,
        contentType: "application/json",
        data: JSON.stringify({
            username: username,
            password: password
        }),
        success: (res) => {
            showHomeView();
            signInUser(res, 'Login successful.')
        },
        error: handleAjaxError
    };
    $.ajax(req);
}

function registerUser() {
    let username = $("#formRegister input[name='username']").val();
    let password = $("#formRegister input[name='passwd']").val();
    let req = {
        url: BASE_URL + `user/${APP_KEY}/`,
        method: "POST",
        contentType: "application/json",
        headers: AUTH_HEADERS,
        data: JSON.stringify({
            username: username,
            password: password
        }),
        success: (res) => {
            showHomeView();
            signInUser(res, 'Registration successful.')
        },
        error: handleAjaxError
    };
    $.ajax(req);
}

function logoutUser() {
    let req = {
        url: BASE_URL + `user/${APP_KEY}/_logout`,
        method: "POST",
        contentType: "application/json",
        headers: {
            'Authorization': "Kinvey " + localStorage.getItem("authtoken"),
        },
        success: (res) => {
            localStorage.clear();
            showHideMenuLinks();
            showHomeView();
        },
        error: handleAjaxError
    };
    $.ajax(req);
    showInfo('Logout successful.')
}

function saveAuthInSession(userInfo) {
    localStorage.setItem("username", userInfo.username);
    localStorage.setItem("authtoken", userInfo._kmd.authtoken);
    localStorage.setItem("userId", userInfo._id);
}

function signInUser(res, message) {
    saveAuthInSession(res);
    showHideMenuLinks();
    showInfo(message);
}

//book catalog
function listBooks() {
    let req = {
        url: BASE_URL + "appdata/" + APP_KEY + '/books',
        headers: {
            'Authorization': "Kinvey " + localStorage.getItem("authtoken")
        },
        success: (res) => {
            displayBooks(res.reverse());
        },
        error: handleAjaxError
    };
    $.ajax(req);
}


function createBook() {
    showView("viewCreateBook");
    let title = $("#formCreateBook input[name=title]").val();
    let author = $("#formCreateBook input[name=author]").val();
    let description = $("#formCreateBook textarea[name=description]").val();
    if(title.length === 0){
        showError("Title cannot be empty");
        return;
    }
    if(author.length === 0){
        showError("Author cannot be empty");
        return;
    }
    let book = {
        title: title,
        author: author,
        description:description
    };

    let req = {
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        method:"POST",
        headers:{
            "Authorization": "Kinvey " + localStorage.getItem("authtoken"),
            "Content-Type": "application/json"
        },
        data:JSON.stringify(book),
        success:()=> {
            listBooks();
            showInfo("Book created.")
        },
        error:handleAjaxError
    };
    $.ajax(req);
}

function deleteBook(book) {
    let req = {
        url:BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        method:"DELETE",
        headers:{
            "Authorization": "Kinvey " + localStorage.getItem("authtoken"),
            "Content-Type": "application/json"
        },
        success:()=>{
            listBooks();
            showInfo("Book deleted.");
        },
        error:handleAjaxError
    };
    $.ajax(req);
}

function loadBookForEdit(book) {
    showView("viewEditBook");
    $("#formEditBook input[name=title]").val(book.title);
    $("#formEditBook input[name=author]").val(book.author);
    $("#formEditBook textarea[name=description]").val(book.description);
    $("#formEditBook input[name=id]").val(book._id);
}

function editBook() {
    let title =$("#formEditBook input[name=title]").val();
    let author = $("#formEditBook input[name=author]").val();
    let description = $("#formEditBook textarea[name=description]").val();
    let id = $("#formEditBook input[name=id]").val();
    let edited = JSON.stringify({
        title,
        author,
        description
    });
    let req = {
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
        method:"PUT",
        headers:{
            "Authorization": "Kinvey " + localStorage.getItem("authtoken"),
            "Content-Type": "application/json"
        },
        data:edited,
        success:()=>{
            listBooks()
            showInfo('Book edited.')
        },
        error:handleAjaxError
    };
    $.ajax(req);
}


function displayBooks(books) {
    showView('viewBooks');
    let bookList = $("#books > table");
    bookList.html('<tr><th>Title</th><th>Author</th><th>Description</th><th>Actions</th></tr>');
    for (let book of books) {
        let actions = [];
        if (localStorage.getItem("userId") == book._acl.creator) {
            actions.push($("<a href=\"#\">[Edit]</a>").click(() => loadBookForEdit(book)));
            actions.push($("<a href=\"#\">[Delete]</a>").click(() => deleteBook(book)));
        }
        let row = $("<tr>")
            .append(`<td>${book.title}</td>`)
            .append(`<td>${book.author}</td>`)
            .append(`<td>${book.description}</td>`)
            .append(actions);
        bookList.append(row);
    }
}
//handling errors
function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg);
}