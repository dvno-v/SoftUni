const Article = require('mongoose').model('Article');

module.exports = {
    createGet: (req, res) => {
        res.render('article/create');
    },

    createPost: (req, res) => {
        let articlleArgs = req.body;

        let errorMsg = '';

        if (!req.isAuthenticated()) {
            errorMsg = 'You should be logged in to make articles!';
        } else if (!articlleArgs.title) {
            errorMsg = 'Invalid title!';
        } else if (!articlleArgs.content) {
            errorMsg = 'Invalid content!';
        }

        if (errorMsg) {
            res.render('article/create', {error: errorMsg});
            return;
        }

        articlleArgs.author = req.user.id;
        Article.create(articlleArgs).then(article => {
            req.user.articles.push(article.id);
            req.user.save(err => {
                if (err) {
                    res.redirect('/', {error: err.message});
                } else {
                    res.redirect('/')
                }
            });
        })
    },

    details: (req, res) => {
        let id = req.params.id;

        Article.findById(id), popilate('author').then(article => {
            res.render('article/details', article)
        });
    }

};
