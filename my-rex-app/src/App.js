import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Preloader from './Components/Preloader/Preloader';
import Sidebar from './Components/Sidebar/Sidebar';
import FacultyService from './Services/FacultyService';
import CollegeService from './Services/CollegeService';
import DepartmentService from './Services/DepartmentService';
import EmployeeService from './Services/EmployeeService';


function App() {
  const [faculty, setFaculty] = useState([]);
  const [college, setCollege] = useState([]);
  const [department, setDepartment] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoaded(false);
    FacultyService.getFaculty().then(response => {
      setFaculty(response.data);
    });
    CollegeService.getCollege().then(response => {
      setCollege(response.data);
    });
    DepartmentService.getDepartment().then(response => {
      setDepartment(response.data);
    });
    EmployeeService.getEmployee().then(response => {
      setEmployee(response.data);
    });
    setLoaded(true);
  }

  return (
    <>
      {loaded ? 
        (<div className='wrapper'>
          {/* Preloader */}
          

          {/* Navbar */}
          <Navbar />
          {/* /.navbar */}

          {/* Main Sidebar Container */}
          <Sidebar />

          {/* Content Wrapper. Contains page content */}
          <Dashboard faculty={faculty} college={college} department={department} employee={employee} />
          {/* /.content-wrapper */}

          <Footer />

          {/* Control Sidebar */}
          <aside className="control-sidebar control-sidebar-dark">
            {/* Control sidebar content goes here */}
          </aside>
          {/* /.control-sidebar */}
        </div>) :
        (<div className='wrapper'><Preloader /></div>)  
      }
    </>
  );
}

export default App;
