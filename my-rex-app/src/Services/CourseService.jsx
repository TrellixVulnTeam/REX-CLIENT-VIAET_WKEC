import axios from 'axios';

const COURSE_API_BASE_URL = "http://128.121.3.62:9090/api/v1/course";

class CourseService {

    getCourse(){
        return axios.get(COURSE_API_BASE_URL);
    }

    createCourse(course){
        return axios.post(COURSE_API_BASE_URL, course);
    }

    getCourseById(courseId){
        return axios.get(COURSE_API_BASE_URL + '/' + courseId);
    }

    updateCourse(course, courseId){
        return axios.put(COURSE_API_BASE_URL + '/' + courseId, course);
    }

    deleteCourse(courseId){
        return axios.delete(COURSE_API_BASE_URL + '/' + courseId);
    }
}

export default new CourseService()