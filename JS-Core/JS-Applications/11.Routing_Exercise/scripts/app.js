$(() => {
    const app = Sammy('#main', function () {
        // TODO: Define all the routes
        this.use(`Handlebars`, `hbs`);
        //home page routing
        this.get('/', displayHome);
        this.get('#/home', displayHome);
        this.get('index.html', displayHome);

        function displayHome() {
            this.hasTeam = sessionStorage.getItem("teamId") != null
                && sessionStorage.getItem("teamId") != "undefined"
                && sessionStorage.getItem("teamId") != "";
            console.log(this.hasTeam);
            if (this.hasTeam)
                this.teamId = sessionStorage.getItem("teamId");
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                console.log('working');
                this.partial("./templates/home/home.hbs")
            });
        }

        //about page
        this.get('#/about', function () {
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs"
            }).then(function () {
                console.log('working');
                this.partial("./templates/about/about.hbs")
            });
        });
        //user login get page
        this.get('#/login', function () {
            this.username = sessionStorage.getItem("username");

            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                "loginForm": "./templates/login/loginForm.hbs"
            }).then(function () {
                console.log('working');
                this.partial("./templates/login/loginPage.hbs")
            });
        });
        //user login post
        this.post('#/login', function () {
            let that = this;
            let username = this.params.username;
            let password = this.params.password;
            auth.login(username, password)
                .then(function (user) {
                    auth.saveSession(user);
                    that.redirect('#/home');
                })
        });
        //user register get page
        this.get('#/register', function () {
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                registerForm: "./templates/register/registerForm.hbs"
            }).then(function () {
                console.log('working');
                this.partial("./templates/register/registerPage.hbs")
            });
        });
        //user register post
        this.post('#/register', function () {
            let that = this;
            let username = that.params.username;
            let password = that.params.password;
            let repeatPassword = this.params.repeatPassword;
            auth.register(username, password, repeatPassword)
                .then(function (user) {
                    auth.saveSession(user);
                    that.redirect('#/home');
                })
        });
        //user logout
        this.get('#/logout', function () {
            let that = this;
            auth.logout()
                .then(function (response) {
                    sessionStorage.clear();
                    that.redirect('#/home');
                })
        });

        //catalog
        this.get('#/catalog', function (context) {
            this.username = sessionStorage.getItem("username");
            let that = context;
            that.loggedIn = sessionStorage.getItem("authtoken") !== null;
            that.username = sessionStorage.getItem("username");
            that.hasNoTeam = sessionStorage.getItem("teamId") == null
                || sessionStorage.getItem("teamId") == "undefined"
                || sessionStorage.getItem("teamId") == "";
            teamsService.loadTeams()
                .then(function (teams) {
                    that.teams = teams;
                    that.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        team: "./templates/catalog/team.hbs"
                    }).then(function () {
                        this.partial("./templates/catalog/teamCatalog.hbs")
                    });
                });
        });
        //catalog details
        this.get('#/catalog/:catalogId', function (ctx) {
            this.username = sessionStorage.getItem("username");
            this.teamId = this.params.catalogId.slice(1);
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            teamsService.loadTeamDetails(this.teamId)
                .then(function (team) {
                    ctx.name = team.name;
                    ctx.comment = team.comment;
                    requester.get("user", "", "kinvey")
                        .then((members) => {
                            ctx.isOnTeam = sessionStorage.getItem("teamId") === team._id;
                            ctx.isAuthor = sessionStorage.getItem("userId") === team._acl.creator;
                            ctx.hasNoTeam = sessionStorage.getItem("teamId") === "" ||
                                sessionStorage.getItem("teamId") === "undefined" ||
                                sessionStorage.getItem("teamId") === null;
                            members = members.filter(m => m.teamId === team._id);
                            ctx.members = members;
                            ctx.loadPartials({
                                header: "./templates/common/header.hbs",
                                footer: "./templates/common/footer.hbs",
                                teamControls: "./templates/catalog/teamControls.hbs",
                                teamMember: "./templates/catalog/teamMember.hbs"
                            }).then(function () {
                                this.partial("./templates/catalog/details.hbs")
                            });
                        });

                });
        });
        //create get page
        this.get('#/create', function () {
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                createForm: "./templates/create/createForm.hbs"
            }).then(function () {
                console.log('working');
                this.partial("./templates/create/createPage.hbs")
            });
        });
        //create post
        this.post('#/create', function () {
            let that = this;
            let name = that.params.name;
            let comment = that.params.comment;
            teamsService.createTeam(name, comment)
                .then(function (team) {
                    teamsService.joinTeam(team._id).then(function (user) {
                        auth.saveSession(user);
                        that.redirect('#/catalog');
                    });
                })
        });
        //edit post get page
        this.get('#/edit/:teamId', function (ctx) {
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            let teamId = this.params.teamId.slice(1);
            teamsService.loadTeamDetails(teamId)
                .then(function (team) {
                    ctx.name = team.name;
                    ctx.comment = team.comment;
                    ctx.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        editForm: "./templates/edit/editForm.hbs"
                    }).then(function () {
                        this.partial("./templates/edit/editPage.hbs")
                    })
                })
        });
        //edit post post
        this.post('#/edit/:teamId', function (ctx) {
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            let teamId = sessionStorage.getItem("teamId");
            console.log(teamId)
            let name = this.params.name;
            let comment = this.params.comment;
            console.log(this.params);
            teamsService.edit(teamId, name, comment)
                .then(function (user) {
                    ctx.redirect(`#/catalog/:${teamId}`);
                })
        });
        //join team
        this.get('#/join/:teamId', function (ctx) {
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            let teamId = this.params.teamId.slice(1);
            teamsService.joinTeam(teamId)
                .then(function (user) {
                    console.log(user)
                    auth.saveSession(user);
                    ctx.redirect(`#/catalog/:${teamId}`);
                })
        });
        //leave team
        this.get('#/leave', function (ctx) {
            this.username = sessionStorage.getItem("username");
            this.loggedIn = sessionStorage.getItem("authtoken") !== null;
            teamsService.leaveTeam()
                .then(function (user) {
                    sessionStorage.setItem("teamId", "");
                    ctx.redirect(`#/catalog`);
                })
        });
    });
    app.run();
});