const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "String is Required"
    },
    type: {
        type: String,
    },
    weight: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;