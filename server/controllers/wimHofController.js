const WimHof = require('../models/wimHof');

//Display selected wimhof
exports.wimHof_select = (req, res) => {
    //Display list of selected wimhofs
    let query = req.query;
    let id = query.id;
    WimHof.find({
        _id: id
    }).exec((err, payload) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            payload
        })
    });
}

//Display list of done wimHofs 
exports.wimHof_list = (req, res) => {
        //Display list of done wimHofs 
        WimHof.find().exec((err, payload) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                })
            }
            res.json({
                ok: true,
                payload
            })
        });
    }
    //Create wimhof

exports.wimHof_create = (req, res) => {
        let body = req.body;
        let wimHof = new WimHof({
            date: body.date
        });

        wimHof.save((err, payload) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                payload
            });
        });
    }
    //Update wimhof
exports.wimHof_update = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let title = req.body.wimhof.title;
    let notes = req.body.wimhof.notes;
    let laps = req.body.wimhof.laps;
    let state = req.body.wimhof.state;
    WimHof.findByIdAndUpdate(id, {
        title,
        notes,
        laps,
        state
    }, {
        new: true
    }, (err, payload) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        console.log("devuelvo payload: ", payload);
        res.json({
            ok: true,
            payload: payload
        });
    });
}

// Delete wimhof
exports.wimHof_delete = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    WimHof.findByIdAndRemove(id, (err, WimHofDeleted) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            WimHof: WimHofDeleted
        });
    });
}