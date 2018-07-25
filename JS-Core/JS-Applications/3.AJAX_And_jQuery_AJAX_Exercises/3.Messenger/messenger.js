function attachEvents() {
    const baseUrl = 'https://softuni-basic-messenger.firebaseio.com/.json';
    const messageBoard = $("#messages");
    //refresh button funtionality
    $("#refresh").click(loadContacts);
    //submit button functionality
    $("#submit").click(create);
    //get contacts
    function loadContacts() {
        let req = {
            url: baseUrl,
            success: displayContacts,
            error:displayError
        };
        $.ajax(req);
    }
    loadContacts();
    //display contacts
    function displayContacts(contacts) {
        messageBoard.empty();
        let result = [];
        for (let contact in contacts) {

            result.push(`${contacts[contact].author}: ${contacts[contact].content}`);
        }
        messageBoard.text(result.join("\n"));author
    }
    //creating contacts
    function create() {
        let name = $("#author").val();
        let content = $("#content").val();
        if(name&&content){
            let newContact = {
                author:name,
                content:content,
                timestamp: Date.now()
            };
            let req = {
                url: baseUrl,
                method: "POST",
                data:JSON.stringify(newContact),
                success: loadContacts,
                error:displayError
            };
            $.ajax(req);
        }
    }
    //error
    function displayError() {

    }
}