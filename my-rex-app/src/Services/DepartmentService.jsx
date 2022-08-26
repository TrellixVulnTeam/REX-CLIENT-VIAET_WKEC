import axios from 'axios';

const DEPARTMENT_API_BASE_URL = "http://128.121.3.62:9090/api/v1/department";

class DepartmentService {

    getDepartment(){
        return axios.get(DEPARTMENT_API_BASE_URL);
    }

    createDepartment(department){
        return axios.post(DEPARTMENT_API_BASE_URL, department);
    }

    getDepartmentById(departmentId){
        return axios.get(DEPARTMENT_API_BASE_URL + '/' + departmentId);
    }

    updateDepartment(department, departmentId){
        return axios.put(DEPARTMENT_API_BASE_URL + '/' + departmentId, department);
    }

    deleteDepartment(departmentId){
        return axios.delete(DEPARTMENT_API_BASE_URL + '/' + departmentId);
    }
}

export default new DepartmentService()