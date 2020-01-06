const Activity = require("../models/Activities.js");
const list = (req, res) => {
  Activity.find().exec((err, payload) => {
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
};
const create = (req, res) => {
  let body = req.body;
  let activity = new Activity({
    name: body.name,
    lapses: body.lapses,
    active: body.active
  });

  activity.save((err, payload) => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        return res.status(400).json({
          ok: false,
          message: "El nombre ya estaba registrado",
          err
        });
      }
      return res.status(400).json({
        ok: false,
        message: "Algo salió mal",
        err
      });
    }
    res.json({
      ok: true,
      message: "Actividad creada con éxito",
      payload
    });
  });
};
const update = (req, res) => {
  let id = req.params.id;
  let body = req.body;
  Activity.findByIdAndUpdate(
    id,
    body,
    {
      new: true
    },
    (err, payload) => {
      if (err) {
        if (err.name === "MongoError" && err.code === 11000) {
          return res.status(400).json({
            ok: false,
            message: "El nombre ya estaba registrado",
            err
          });
        }
        return res.status(400).json({
          ok: false,
          message: "Algo salió mal",
          err
        });
      }
      res.json({
        ok: true,
        message: "Marca de producto actualizado con éxito",
        payload
      });
    }
  );
};
const deletes = (req, res) => {
  let id = req.params.id;
  let body = req.body;
  Activity.findByIdAndRemove(id, (err, payload) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        message: "Algo salió mal",
        err
      });
    }
    res.json({
      ok: true,
      message: "Marca de producto eliminado con éxito",
      payload
    });
  });
};

module.exports = {
  list,
  create,
  update,
  deletes
};
