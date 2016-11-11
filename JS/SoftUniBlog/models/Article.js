/**
 * Created by zorry on 10.11.2016 г..
 */
const mongoose = require('mongoose');
let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true},
    date: {type: Date, default: Date.now()}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;

