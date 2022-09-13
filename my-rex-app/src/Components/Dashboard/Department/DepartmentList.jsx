import { useState } from 'react';
import DepartmentCard from './DepartmentCard'
import FilterCollege from './FilterCollege';

function DepartmentList({ faculty }) {

  const renderCollege = () => {
    return faculty.map((fac) => {
      return fac.colleges.map((college) => {
        return renderDepartment(college);
      })
    })
  }
  const renderDepartment = (college) => {
    return [
      <h4 className='mt-4 mb-4' key={college.collegeId}>{college.name}</h4>,
      college.departments.map((department) => {
        return <DepartmentCard key={department.departmentId} department={department} />
      })
    ]
  }

  const onFilterValueSelected = (collegeId) =>
  {
      console.log(collegeId);
  }
  return (
    <div>
      <FilterCollege faculty={faculty} onFilterValueSelected={onFilterValueSelected}/>
      {renderCollege()}
    </div>
  )
}

export default DepartmentList