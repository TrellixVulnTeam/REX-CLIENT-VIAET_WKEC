import axios from 'axios';

const COLLEGE_API_BASE_URL = "http://128.121.3.62:9090/api/v1/college";

class CollegeService {

    getCollege(){
        return axios.get(COLLEGE_API_BASE_URL);
    }

    createCollege(college){
        return axios.post(COLLEGE_API_BASE_URL, college);
    }

    getCollegeById(collegeId){
        return axios.get(COLLEGE_API_BASE_URL + '/' + collegeId);
    }

    updateCollege(college, collegeId){
        return axios.put(COLLEGE_API_BASE_URL + '/' + collegeId, college);
    }

    deleteCollege(collegeId){
        return axios.delete(COLLEGE_API_BASE_URL + '/' + collegeId);
    }
}

export default new CollegeService()