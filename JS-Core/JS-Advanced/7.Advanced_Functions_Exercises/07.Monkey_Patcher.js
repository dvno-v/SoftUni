let solution = (function () {
    let obj = {
        call: call,
    }

    function call(post, argument) {
        post.score = post.upvotes - post.downvotes;
        //upVote
        if (argument.toLowerCase() == 'upvote') {
            function upvoteScore() {
                post.upvotes++
                if (post.upvotes + post.downvotes > 49) {
                    let obfuscatedUpvotes = post.upvotes + Math.floor(post.upvotes * 1 / 4);
                    let obfuscatedDownvotes = post.downvotes + Math.floor(post.downvotes * 1 / 4);
                    return [obfuscatedUpvotes, obfuscatedDownvotes, post.score, getRating(post)]
                }
            }
        }
        //downVote
        if (argument == 'downvote') {
            function downvoteScore() {
                post.downvotes++;
                if (post.upvotes + post.downvotes > 49) {
                    let obfuscatedUpvotes = post.upvotes + Math.floor(post.upvotes * 1 / 4);
                    let obfuscatedDownvotes = post.downvotes + Math.floor(post.downvotes * 1 / 4);
                    return [obfuscatedUpvotes, obfuscatedDownvotes, post.score, getRating(post)]
                }
            }
        }
        //Get Score
        if (argument == "score") {
            function showScore() {
                return [obfuscatedUpvotes, obfuscatedDownvotes, post.score, getRating(post)]
            }
        }
        //get Rating
        function getRating(post) {
            let upvotes = post.upvotes;
            let downvotes = post.downvotes;
            let allVotes = upvotes + downvotes;
            let rating = ( allVotes / upvotes) * 100;
            if (rating > 66) {
                return "hot";
            } else if (rating <= 66 && upvotes - downvotes >= 0) {
                return "controversial"
            } else if (upvotes - downvotes < 0) {
                return "unpopular;"
            } else {
                return 'new';
            }

        }
    }
    return obj;
})();
let post = {id: '3', author: 'emil',content: 'wazaaaaa',upvotes: 100,downvotes: 100};
console.log(solution.call(post, 'upvote'));
console.log(solution.call(post, 'downvote'));
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i = 0; i < 49; i++) {
    console.log(solution.call(post, 'downvote'));       // (executed 50 times)
}
console.log(score = solution.call(post, 'score'));