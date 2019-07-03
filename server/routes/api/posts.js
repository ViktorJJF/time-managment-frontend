const express = require('express');
const mongodb = require('mongodb');


// const Cat = mongoose.model('Cat', {
//     name: String
// });

// const kitty = new Cat({
//     name: 'Zildjian'
// });
// kitty.save().then(() => console.log('meow'));

const router = express.Router();

//get posts
router.get('/', async(req, res) => {
    // const post = await loadPostCollections();
    res.send(await posts.find({}).toArray());
});

//add posts

//delete post
async function loadPostCollections() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://VictorJJF:<Sed4cfv52309$>@cluster0-ceisv.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('cluster0').collection('posts');
}

module.exports = router;