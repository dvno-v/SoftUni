let a =function (){
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let result = `Post: ${this.title}\n`;
            result += `Content: ${this.content}`;
            return result;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let base = super.toString();
            let additional = `\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                additional += "\nComments: \n" + this.comments.map(c => ` * ${c}`).join("\n");
            }
            return base + additional;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        toString() {
            let base = super.toString();
            let additional = `\nViews: ${this.views}`;
            return base + additional;
        }
        view(){
            this.views++;
            return this;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

let reulst = a();
let post = new reulst.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new reulst.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let test = new reulst.SocialMediaPost("TestTitle", "TestContent", 5, 10);
test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());
console.log("---------")
var asd = "Post: TestTitle\n" +
    "Content: TestContent\n" +
    "Rating: -5\n" +
    "Comments:\n" +
    " * 1\n" +
    " * 2\n" +
    " * 3";
console.log(asd)

console.log(test.toString() === asd)