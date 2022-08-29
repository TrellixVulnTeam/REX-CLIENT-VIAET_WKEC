import axios from 'axios';

const FACULTY_API_BASE_URL = "http://localhost:9090/api/v1/faculty";

class FacultyService {

    getFaculty(){
        return axios.get(FACULTY_API_BASE_URL);
    }

    createFaculty(faculty){
        return axios.post(FACULTY_API_BASE_URL, faculty);
    }

    getFacultyById(facultyId){
        return axios.get(FACULTY_API_BASE_URL + '/' + facultyId);
    }

    updateFaculty(faculty, facultyId){
        return axios.put(FACULTY_API_BASE_URL + '/' + facultyId, faculty);
    }

    deleteFaculty(facultyId){
        return axios.delete(FACULTY_API_BASE_URL + '/' + facultyId);
    }
}

export default new FacultyService()