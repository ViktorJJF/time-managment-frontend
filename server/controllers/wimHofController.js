const WimHof = require('../models/wimHof');
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
    WimHof.findByIdAndUpdate(id, body, {
        new: true
    }, (err, WimHofDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            WimHof: WimHofDB
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