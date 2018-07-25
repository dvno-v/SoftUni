$(()=>{
    //constants
    const baseUrl = `https://phonebooks-ab670.firebaseio.com/phonebook`;
    const phonebookUl = $("#phonebook");
    //at first loading the phonebooks
    function loadAll(){
        let req = {
            url : baseUrl + ".json",
            success: displayElements,
            error:displayError
        }
        $.ajax(req);
    }
    loadAll();
    //updating the phonebookUl
    function displayElements(phonebooks){
        phonebookUl.empty();
        for(let phonebook in phonebooks){
            phonebookUl
            .append($(`<li>${phonebooks[phonebook].name}: ${phonebooks[phonebook].phone}</li>`)
            .append($('<button>Delete</button>').click(()=>{
                deleteElement(phonebook);
            })));
        }
    }
    //errors
    function displayError(messege){
        phonebookUl.empty();
        loadAll();
        alert(`${messege}`)
    }
    //creating a phonebook
    $("#btnCreate").click(createContact);
    function createContact(){
        let name = $("#person").val();
        let phone = $("#phone").val();
        if(!name){
            displayError("Cannot create without name");
            return;
        }
        if(!phone){
            displayError("Cannot create without phone");
            return;
        }
        let req = {
            url : baseUrl + ".json",
            method: "POST",
            data:JSON.stringify({name,phone}),
            success: loadAll,
            error:()=>{
                displayError("Could not create a phonebook")
            },
            complete:() => {
                $("#person").val("");
                $("#phone").val("");
            }
        }
        $.ajax(req);
    }
    //deleting a phonebook
    function deleteElement(element){
        let currentUrl = baseUrl + "/" + `${element}.json`;
        let req = {
            url: currentUrl,
            method:"DELETE",
            success:loadAll,
            error:displayError
        }
        $.ajax(req);
    }
});