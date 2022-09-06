import DepartmentCard from './DepartmentCard'

function DepartmentList({ department }) {
  const renderDepartments = () => {
    return department.map((department) => {
      return <DepartmentCard key={department.departmentId} department={department} />
    })
  }

  return (
    <div>
      <h3 className="mt-4 mb-4">VIAET</h3>
      {renderDepartments()}
    </div>
  )
}

export default DepartmentList