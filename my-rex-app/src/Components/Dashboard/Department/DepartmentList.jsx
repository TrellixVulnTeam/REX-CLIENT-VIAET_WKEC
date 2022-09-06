import DepartmentCard from './DepartmentCard'

function DepartmentList({department}) {
    const staticDepartments = [
        {id:"CSIT",name: "DEPARTMENT OF COMPUTER SCIENCE AND INFORMATION TECHNOLOGY", img_src: "../dist/img/user7-128x128.jpg",hod: "Dr. W. Jeberson (Head)"},
        {}
    ]
    const renderDepartments = ()=> {
        return department.map((department) => {
            return <DepartmentCard key={department.departmentId} department={department} />
        })
    }
  return (
    <div>{renderDepartments()}</div>
  )
}

export default DepartmentList