const express = require("express");
const app = express();
app.use(express.json());

const mentorsJson = require("./mentors.json");
const Mentor = require("./Mentor.js");

const coursesJosn = require("./courses.json")
const Courses = require("./Courses.js")

const hyf_mentors = new Mentor(mentorsJson)
const hyf_courses = new Courses(coursesJosn);

// http://localhost:3000/mentors/0

app.get("/mentors", function(req, res) {
    const allMentors = hyf_mentors.getMentorNames();
    console.log(req.query);  // http://url.com/something?search=test
    const firstLetter = req.query.startsWith;
    if (!firstLetter) {
        res.send(allMentors);
    } else {
        const filteredMentors = allMentors.filter(q => q.startsWith(firstLetter))
        res.send(filteredMentors);
    }
});

app.get("/courses/:name", function(req, res) {
    const name = req.params.name;
    const course = hyf_courses.getCourse(name);
    if (!course) {
        res.send("Not found")
    } else {
        res.send(course);
    }
})

app.get("/courses", function(req, res) {
    const allCourses = hyf_courses.getList();
    //const filteredMentors = allMentors.filter(q => q.startsWith("A"))
    res.send(allCourses);
});

app.post("/courses", function(req, res) {
    console.log(req.body);
    hyf_courses.addCourse(req.body);
    res.send("Course added!")
})

app.listen(3000);
console.log("Server is running")