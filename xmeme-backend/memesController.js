// memeController.js
// Import meme model
Memes = require('./memesModel');
IdArray = require('./arrayModel');
var Idarr = new IdArray();
var idArray = []
// Handle index actions
exports.index = function (req, res) {
    Memes.get(function (err, memes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(idArray)
        let arr = memes.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
          });
        arr.reverse()
        let recent_memes = []
        if(arr.length>100)
            recent_memes = arr.slice(0,100);
        else
            recent_memes = arr.slice(0,arr.length)
        let memes_array = recent_memes.map((element) => ({id: element._id, name:element.name, url: element.url,caption: element.caption}))
        res.json({
            data:memes_array
        });
    });
};
// Handle create meme actions
exports.new = function (req, res) {
    var memes = new Memes();
    memes.name = req.body.name;
    memes.url = req.body.url;
    memes.caption = req.body.caption;
    Idarr.id = memes._id;
    Idarr.save(function (err) {
        if(err)
            res.json(err);
    });
    // save the meme and check for errors
    memes.save(function (err) {
        if (err)
            res.json(err);
        else{
            res.json({
                id: memes._id
            });
        }
    });
};
// Handle view meme info
exports.view = function (req, res) {
    var index = idArray[req.params.meme_id-1]
    Memes.findById(index, function (err, meme) {
        if (meme == null){
            res.send("404 error - Invalid Id ");}
        else{
            meme_id = {"id": meme._id, "name":meme.name, "url": meme.url, "caption": meme.caption}
            res.json({
                data: meme_id
            });
        }
    });
};
// Handle update meme info
exports.update = function (req, res) {
Memes.findById(req.params.meme_id, function (err, meme) {
        if (meme==null)
            res.send("I'd does not exist. Updation cannot be done!");
        meme.name = meme.name;
        meme.url = req.body.url;
        meme.caption = req.body.caption;
// save the meme and check for errors
        meme.save(function (err) {
            if (err)
                res.json(err);
            meme_id = {"id": meme._id, "name":meme.name, "url": meme.url, "caption": meme.caption}
            res.json({
                message: 'Meme Info updated',
                data: meme_id
            });
        });
    });
};
// Handle delete meme
exports.delete = function (req, res) {
    Memes.remove({
        _id: req.params.meme_id
    }, function (err, meme) {
        if (err)
            res.send(err);
    res.json({
            status: "success",
            message: 'Meme deleted'
        });
    });
};



