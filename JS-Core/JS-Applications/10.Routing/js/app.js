$(() => {
    const app = Sammy("#main", function () {
        this.use('Handlebars', "hbs");
        this.get('index.html', function (context) {
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial('./templates/login.hbs')
            });
        });
        this.get('#/profile', function (context) {
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial('./templates/profile.hbs')
            });
        });
        this.get('#/contacts', function (context) {
            context.logged = true;
            context.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                contact: "./templates/common/contact.hbs",
                details: "./templates/common/details.hbs"
            }).then(function () {
                kinvey.getContacts()
                    .then((contacts) => {
                        context.contacts = contacts;
                        context.partial('./templates/contacts.hbs');
                    })
            });
        });
        this.get('#/register', function (context) {
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                this.partial('./templates/register.hbs')
            });
        });

        this.get("#/logout", function () {
        });

        this.post("#/register", function (context) {
            console.log("post register");
            let username = this.params.username;
            let password = this.params.passwd;
            let name = this.params.name;
            let email = this.params.email;
            let phone = this.params.phone;
            kinvey.registerUser(username, password, phone, email, name, context);
        });

        this.post("#/login", function (context) {
            console.log("loggin in");
            let username = this.params.username;
            let password = this.params.passwd;
            kinvey.loginUser(username, password, context);
        });
    });

    app.run();
});