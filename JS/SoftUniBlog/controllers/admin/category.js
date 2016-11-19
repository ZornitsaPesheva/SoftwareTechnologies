const Category = require('mongoose').model('Category');

module.exports = {
    all: (req, res) => {
        Category.find({}).then(categories => {
            res.render('admin/category/all', {categories: categories});
        })
    },

    createGet: (req, res) => {
        res.render('admin/category/create');
    },

    createPost: (req, res) => {
        let categoryArgs = req.body;

        if(!categoryArgs.name) {
            let errorMsg = 'Category name canot be null!';
            categoryArgs.error = errorMsg;
            res.render('admin/category/create', categoryArgs);
        }
        else {
            Category.create(categoryArgs).then(category => {
                res.redirect('/admin/category/all');
            })
        }
    }
}

