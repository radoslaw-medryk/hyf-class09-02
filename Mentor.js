
class Mentor {
    constructor(mentor) {
        this.mentor = mentor;
    }
    getMentorNames() {
        let mentors = this.mentor.map(mentor => mentor.name);
        return mentors;
    }

    getCourseMentors(course) {
        let mentors = [];
        this.mentor.forEach(element => {
            element.course.forEach(elem => {
                if (elem.toLowerCase() === course.toLowerCase()) {
                    mentors.push(element.name);
                }
            });
        });
        if (mentors.length === 0) {
            console.log('Course doesnt exist');
        } else {
            console.log(mentors);
        }
    }
    // Step 4: Write a method that can edit existing mentor information
    editMentor(mentor) {
        let editedMentor = this.mentor
            .filter(elem => elem.name === mentor.name)
            .map(elem => {
                return {
                    name: mentor.name,
                    course: mentor.courses
                };
            });
        console.log(editedMentor);
    }
    // Step 5: Write a method that can delete existing mentor
    deleteMentor(mentorName) {
        let result = this.mentor.filter(elem => elem.name !== mentorName);
        console.log(result);
    }
}

module.exports = Mentor;