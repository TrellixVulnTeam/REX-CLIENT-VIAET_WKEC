import DepartmentCard from './DepartmentCard'

function DepartmentList({ faculty }) {
  // const renderDepartments = () => {
  //   return department.map((department) => {
  //     return <DepartmentCard key={department.departmentId} department={department} />
  //   })
  // }
  const renderDepartment2 = () => {
    return faculty.map((fac) => {
      return fac.colleges.map((coll)=> {
        return (<div>{coll.name}</div>
        coll.departments.map )
      })
    })
  }
  return (
    <div>
      <h3 className="mt-4 mb-4">VIAET</h3>
      {/* {renderDepartments()} */}
      {renderDepartment2()}
    </div>
  )
}

export default DepartmentList