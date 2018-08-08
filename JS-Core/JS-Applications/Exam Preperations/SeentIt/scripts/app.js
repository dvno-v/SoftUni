$(() => {
    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    });

    const app = Sammy("#container", function () {
        this.use("Handlebars", "hbs");

        this.get("/", displayHome);
        this.get("#/home", displayHome);
        this.get("index.html", displayHome);

        function displayHome() {
            console.log("in home");
            this.logged = sessionStorage.getItem("authtoken") !== null;
            if (this.logged) {
                this.redirect("#/catalog");
                return;
            }
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                about: "./templates/home-anonymous/about.hbs",
                loginForm: "./templates/home-anonymous/loginForm.hbs",
                registerForm: "./templates/home-anonymous/registerForm.hbs"
            }).then(function () {
                this.partial("./templates/home-anonymous/welcome-anon.hbs")
            })
        }

        //user - login, register, logout
        //user login
        this.post("#/login", function () {
            let that = this;
            let username = this.params.username;
            let password = this.params.password;
            auth.login(username, password)
                .then(function (response) {
                    auth.showInfo("Login successful!");
                    auth.saveSession(response);
                    that.redirect("#/catalog");
                })
        });
        //user register
        this.post("#/register", function () {
            let that = this;
            let username = this.params.username;
            let repetPassword = this.params.repeatPass;
            let password = this.params.password;
            auth.register(username, password, repetPassword)
                .then(function (response) {
                    auth.showInfo("Register successful!");
                    auth.saveSession(response);
                    that.redirect("#/catalog")
                })
        });
        //user logout
        this.get("#/logout", function () {
            let that = this;
            auth.logout().then(function () {
                sessionStorage.clear();
                auth.showInfo("Logout successful!");
                that.redirect("#/home");
            })
        });
        //catalog- get page
        this.get("#/catalog", function () {
            this.logged = sessionStorage.getItem("authtoken") != null;
            this.username = sessionStorage.getItem("username");
            requester.get('appdata', "posts", "kinvey")
                .then((posts) => {
                    for (let post of posts) {
                        post.isAuthor = post._acl.creator === sessionStorage.getItem("userId");
                        post.date = calcTime.calcTime(post.date);
                    }
                    this.posts = posts;
                    this.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        navigation: "./templates/common/navigation.hbs",
                        post: "./templates/posts/post.hbs",
                    }).then(function () {
                        this.partial("./templates/posts/postsCatalog.hbs")
                    });
                })
        });
        // my posts catalog
        this.get("#/myposts", function () {
            this.logged = sessionStorage.getItem("authtoken") != null;
            this.username = sessionStorage.getItem("username");
            this.viewOwnPosts = true;
            requester.get('appdata', `posts?query={"author":"${this.username}"}&sort={"_kmd.ect": -1}`, "kinvey")
                .then((posts) => {
                    for (let post of posts) {
                        post.isAuthor = post._acl.creator === sessionStorage.getItem("userId");
                    }
                    this.posts = posts;
                    this.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        navigation: "./templates/common/navigation.hbs",
                        post: "./templates/posts/post.hbs",
                    }).then(function () {
                        this.partial("./templates/posts/postsCatalog.hbs")
                    });
                })
        });
        //create get page
        this.get("#/create", function () {
            this.logged = sessionStorage.getItem("authtoken") != null;
            this.username = sessionStorage.getItem("username");
            this.loadPartials({
                header: "./templates/common/header.hbs",
                footer: "./templates/common/footer.hbs",
                navigation: "./templates/common/navigation.hbs",
                createForm: "./templates/create/createForm.hbs",
            }).then(function () {
                this.partial("./templates/create/createPage.hbs")
            })
        });
        //create post
        this.post("#/submit", function () {
            let that = this;
            let author = sessionStorage.getItem("username");
            let title = this.params.title;
            let url = this.params.url;
            let description = this.params.comment;
            let imageUrl = this.params.image;
            let date = new Date();
            if (url === "" || title === "") {
                auth.showError("Please fill the required fields of the form.");
                return;
            } else if (url.substring(0, 4) !== "http") {
                auth.showError("Provide a valid URL link.");
                return;
            }
            let post = {date, title, url, description, imageUrl, author};
            requester.post("appdata", "posts", "kinvey", post)
                .then(function (respose) {
                    console.log(respose)
                    that.redirect("#/catalog");
                }).catch(function (err) {
                auth.showError(err.responseJSON.description)
            });
        });
        //edit post get page
        this.get("#/posts/:postId/edit", function () {
            this.logged = sessionStorage.getItem("authtoken") != null;
            this.username = sessionStorage.getItem("username");
            let postId = this.params.postId;
            requester.get("appdata", `posts/${postId}`, "kinvey")
                .then((post) => {
                    this.postId = postId;
                    this.url = post.url;
                    this.title = post.title;
                    this.description = post.description;
                    this.imageUrl = post.imageUrl;
                    this.loadPartials({
                        header: "./templates/common/header.hbs",
                        footer: "./templates/common/footer.hbs",
                        navigation: "./templates/common/navigation.hbs",
                        editForm: "./templates/edit/editForm.hbs",
                    }).then(function () {
                        this.partial("./templates/edit/editPage.hbs")
                    })
                });
        });
        //edit post - post req
        this.post("#/posts/:postId/edit", function () {
            let that = this;
            let author = sessionStorage.getItem("username");
            let date = new Date();
            let title = this.params.title;
            let url = this.params.url;
            let description = this.params.description;
            let imageUrl = this.params.image;
            let postId = this.params.postId;
            if (url === "" || title === "") {
                auth.showError("Please fill the required fields of the form.");
                return;
            } else if (url.substring(0, 4) !== "http") {
                auth.showError("Provide a valid URL link.");
                return;
            }
            let post = {title, url ,date , description, imageUrl, author};
            requester.update('appdata', `posts/${postId}`, "kinvey", post)
                .then(function (respose) {
                    that.redirect("#/catalog");
                }).catch(function (err) {
                auth.showError(err.responseJSON.description)
            });
        });
        //delete post
        this.get("#/posts/delete/:postId", function () {
            this.logged = sessionStorage.getItem("authtoken") != null;
            this.username = sessionStorage.getItem("username");
            let postId = this.params.postId;
            requester.remove("appdata", `posts/${postId}`, 'kinvey')
                .then((response)=>{
                    auth.showError("Deleted successfully!");
                    this.redirect("#/catalog");
                }).catch(auth.showError);
        });
        //comments -get page
        this.get("#/posts/:postId/comments", function () {
            this.logged = sessionStorage.getItem("authtoken") != null;
            this.username = sessionStorage.getItem("username");
            let postId = this.params.postId;
            console.log(postId);
            requester.get("appdata", `posts/${postId}`, "kinvey")
                .then((post) => {
                    requester.get("appdata", `comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`, "kinvey")
                        .then((comments) => {
                            for (let comment of comments) {
                                comment.date = calcTime.calcTime(comment.date);
                                comment.isCommentAuthor = false;
                                if (sessionStorage.getItem("userId") == comment._acl.creator) {
                                    comment.isCommentAuthor = true;
                                }
                            }
                            this.date = calcTime.calcTime(post.date);
                            this.postId = postId;
                            this.url = post.url;
                            this.title = post.title;
                            this.description = post.description;
                            this.imageUrl = post.imageUrl;
                            this.comments = comments;
                            this.author = post.author;
                            this.isPostAuthor = sessionStorage.getItem("userId") == post._acl.creator;
                            this.loadPartials({
                                header: "./templates/common/header.hbs",
                                footer: "./templates/common/footer.hbs",
                                navigation: "./templates/common/navigation.hbs",
                                comment: "./templates/comments/comment.hbs",
                                commentForm: "./templates/comments/commentForm.hbs",
                            }).then(function () {
                                this.partial("./templates/comments/commentsPage.hbs")
                            })
                        }).catch(auth.showError);
                }).catch(auth.showError);
        });
        this.post("#/posts/:postId/comments", function () {
            let that = this;
            let postId = this.params.postId;
            let date = new Date();
            let author = sessionStorage.getItem("username");
            let content = this.params.content;
            let postComment = {postId, date, author, content};
            requester.post('appdata', `comments`, "kinvey", postComment)
                .then(function (respose) {
                    that.redirect(`#/posts/${postId}/comments`);
                }).catch(function (err) {
                auth.showError(err.responseJSON.description)
            });
        });
        this.get("#/posts/:postId/delete/:commentId", function () {
            let that = this;
            let commentId = this.params.commentId;
            let postId = this.params.postId;
            requester.remove('appdata', `comments/${commentId}`, "kinvey")
                .then(function (response) {
                    console.log(response);
                    that.redirect(`#/posts/${postId}/comments`);
                }).catch(function (err) {
                auth.showError(err.responseJSON.description)
            });
        })
    });


    app.run();
});