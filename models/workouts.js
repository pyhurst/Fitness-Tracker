const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    workouts: [{
        name: {
            type: String,
            unique: true,
            trim: true,
            required: "Name is Required"
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
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;