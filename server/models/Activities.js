const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let activitySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre de la actividad es requerido"]
    },
    lapses: { type: Array, default: [] },
    active: {
      type: Boolean,
      default: false
    },
    userId: {
      type: String,
      default: "pkoqkwdm"
    },
    category: {
      type: String,
      default: "None"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Activities", activitySchema);
