const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())

const mentorsJson = require("./mentors.json");
const Mentor = require("./Mentor.js");

const coursesJosn = require("./courses.json")
const Courses = require("./Courses.js")

const hyf_mentors = new Mentor(mentorsJson)
const hyf_courses = new Courses(coursesJosn);

// Get all mentors. If `query` parameter `startsWith` provided, get only mentors with name starting with provided letter.
// GET http://localhost:3000/mentors?startsWith=<letter here>
app.get("/mentors", function(req, res) {
    const allMentors = hyf_mentors.getMentorNames();
    
    const firstLetter = req.query.startsWith;

    if (!firstLetter) {
        res.send(allMentors);
    } else {
        const filteredMentors = allMentors.filter(q => q.startsWith(firstLetter))
        res.send(filteredMentors);
    }
});

// Get course with provided `params` parameter `name`.
// GET http://localhost:3000/courses/<course name here>
app.get("/courses/:name", function(req, res) {
    const name = req.params.name;

    const course = hyf_courses.getCourse(name);

    if (!course) {
        res.send("Not found")
    } else {
        res.send(course);
    }
})

// Get all courses.
// GET http://localhost:3000/courses
app.get("/courses", function(req, res) {
    const allCourses = hyf_courses.getList();
    res.send(allCourses);
});

// Add new course to course collection.
// POST http://localhost:3000/courses
app.post("/courses", function(req, res) {
    console.log(req.body);
    hyf_courses.addCourse(req.body);
    res.send("Course added!")
})

app.listen(3000);
console.log("Server is running")