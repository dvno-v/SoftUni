function attachEvents() {
    //constnts
    const select = $("#posts");
    const postTitle = $("#post-title");
    const postBody = $("#post-body");
    const commentsUl = $("#post-comments");
    const baseUrl = `https://baas.kinvey.com/appdata/kid_BJ5TRe9VQ/`;
    //attaching event listeners
    $("#btnLoadPosts").click(loadPosts);
    $("#btnViewPost").click(viewPosts);

    //get requests
    function request(endpoint) {
        return $.ajax({
            url: baseUrl + endpoint,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("pesho:p"));
            },
            error: displayError
        });
    }

    //loading posts and displaying them
    function loadPosts() {
        request("posts")
            .then(displayPosts);

        function displayPosts(posts) {
            for (let post of posts) {
                let opt = $(`<option>${post.title}</option>`)
                opt.val(post._id);
                opt.appendTo(select);
            }
        }
    }

    //displaying post body and its comments
    function viewPosts() {
        let selectedId = select.find(":selected").val();
        //req postTitle
        let postP = request(`posts/${selectedId}`);
        let commentP = request(`comments/?query={"post_id":"${selectedId}"}`)
        Promise.all([postP, commentP])
            .then(displayPostAndComments);

        function displayPostAndComments([post, comments]) {
            postTitle.text(post.title);
            postBody.text(post.body);
            commentsUl.empty();
            for (let comment of comments) {
                $(`<li>${comment.body}</li>`).appendTo(commentsUl)
            }
        }

    }

    //error handling
    function displayError(err) {
        commentsUl.empty();
        $(`<li>Error: ${err}</li>`).appendTo(commentsUl)
    }
}