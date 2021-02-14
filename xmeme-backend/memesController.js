// memeController.js
// Import meme model
Memes = require('./memesModel');
// Handle index actions
// get data
exports.index = function (req, res) {
    Memes.get(function (err, memes) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        let arr = memes;
        //reverse the array to get latest memes first
        arr.reverse()
        let recent_memes = []
        // display only 100 memes if number exceeds 100
        if(arr.length>100)
            recent_memes = arr.slice(0,100);
        else
            recent_memes = arr.slice(0,arr.length)
        let memes_array = recent_memes.map((element) => ({id: element._id, name:element.name, url: element.url,caption: element.caption, date: element.create_date.toDateString()}))
        res.json({
            data:memes_array
        });
    });
};
// Handle create meme actions
//post data
exports.new = function (req, res) {
    var memes = new Memes();
    memes.name = req.body.name;
    memes.url = req.body.url;
    memes.caption = req.body.caption;
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
// get meme data by id
exports.view = function (req, res) {
    Memes.findById(req.params.meme_id, function (err, meme) {
        if (meme == null){
            res.send("404 error - Invalid Id ");}
        else{
            meme_id = {"id": meme._id, "name":meme.name, "url": meme.url, "caption": meme.caption, "date": meme.create_date}
            res.json({
                data: meme_id
            });
        }
    });
};
// Handle update meme info
// update meme data using id
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
            meme_id = {"id": meme._id, "name":meme.name, "url": meme.url, "caption": meme.caption,"date": meme.create_date}
            res.json({
                message: 'Meme Info updated',
                data: meme_id
            });
        });
    });
};
// Handle delete meme
// using id
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



