import DepartmentCard from './DepartmentCard'

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
      <h3 className='mt-4 mb-4' key={college.collegeId}>{college.name}</h3>,
      college.departments.map((department) => {
        return <DepartmentCard key={department.departmentId} department={department} />
      })
    ]
  }
  return (
    <div>
      {renderCollege()}
    </div>
  )
}

export default DepartmentList