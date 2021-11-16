const router = require("express").Router();
const Workout = require("../models/workout");

// Find all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

// Find a workout and update it (adds an exercise)
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate({ _id: req.params.id }, {$push: {exercises: req.body}})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

// Create a new workout
router.post("/api/workouts/:id", (req, res) => {
    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

// Find workouts in range
router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router;