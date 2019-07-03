const express = require('express');
const Goal = require('../models/goals.js');

const app = express();

app.get('/goals', (req, res) => {
    Goal.find({}).exec((err, goals) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            goals
        })
    });
});
app.post('/goals', (req, res) => {
    let body = req.body;
    let goal = new Goal({
        state: body.state,
        description: body.description,
        timeLimit: body.timeLimit,
    });

    goal.save((err, goalDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            usuario: goalDB
        });
    });

    // if (body.nombre === undefined) {
    //     res.status(400).json({
    //         ok: false,
    //         mensaje: 'El nombre es necesario'
    //     });
    // } else {
    //     res.json({
    //         persona: body
    //     })
    // }
});
app.put('/usuario/:id', (req, res) => {
    let id = req.param.id;
    res.json({
        id
    })
});

module.exports = app;