class Courses {
    constructor(course) {
        this.courses = course;
    }
    // Step 1: Write a method that can return list of all HYF courses
    getList() {
        const data = this.courses.map(courses => courses);
        return data;
    }
    // Step 2: Write a method that can return one course info
    getCourse(course) {
        let reslut = this.courses.filter(
            elem => elem.title.toLowerCase() === course.toLowerCase()
        );
        if (reslut.length === 0) {
            return undefined;
        } else {
            return reslut;
        }
    }
    // Step 3: Write a method that can add a new course to HYF library
    addCourse(course) {
        let courseExist = this.courses.filter(
            elem => elem.title === course.title
        );
        if (courseExist.length === 0) {
            this.courses.push(course);
        } else {
            console.log('Course alredy Exist');
        }
    }
}

module.exports = Courses