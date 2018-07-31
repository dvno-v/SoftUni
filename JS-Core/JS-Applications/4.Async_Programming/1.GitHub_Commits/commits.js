function loadCommits() {
    let username = $("#username").val();
    let repoName = $("#repo").val();
    let list = $("#commits");
    $.get(`https://api.github.com/repos/${username}/${repoName}/commits`)
        .then(displayRepos)
        .catch(displayError);

    function displayRepos(data) {
        list.empty();
        for(let repo of data){
            let author = repo.commit.author.name;
            let message = repo.commit.message;
            let li = $(`<li>${author}: ${message}</li>`);
            list.append(li);
        }
    }

    function displayError(err) {
        list.empty();
        let li = $(`<li>Error: ${err.status} (${err.statusText})</li>`);
        list.append(li);
    }
}