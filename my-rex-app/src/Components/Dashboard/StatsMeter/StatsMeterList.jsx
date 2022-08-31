import { useState } from "react";
import StatsMeter from "./StatsMeter"
import Table from "./Table";

function StatsMeterList({ faculty, college, department, employee }) {

    const handleClick = (id) => {
        setIsShown(current => !current);
        alert("State" + isShown + " Toggled with Component :" + id);
    }
    const [isShown, setIsShown] = useState(false);

    const staticStatsMeters = [
        { id: 1, count: faculty.length, name: "Faculties", color: "bg-info", icon: "ion-university" },
        { id: 2, count: college.length, name: "Colleges", color: "bg-success", icon: "ion-podium" },
        { id: 3, count: department.length, name: "Departments", color: "bg-warning", icon: "ion-erlenmeyer-flask" },
        { id: 4, count: employee.length, name: "Employees", color: "bg-danger", icon: "ion-person" }
    ];
    const [statsMeters, setStatsMeters] = useState(staticStatsMeters);

    const staticTables = [
        { id: 5, obj:faculty, title: "Faculty Details", headings: ["Sr","ID","Name","Official Link"]},
        { id: 6, obj:college, title: "College Details", headings: ["Sr","ID","Name","Official Link"]},
        { id: 7, obj:department, title: "Department Details", headings: ["Sr","ID","Name","Official Link"]},
        { id: 8, obj:employee, title: "Employee Details", headings: ["Sr","Emp ID","Prefix1","Prefix2","Name","Designation","Official Email","Department","Action"]}
    ];
    const [tables, setTables] = useState(staticTables);

    const renderStatsMeters = () => {
        return statsMeters.map((statsMeter) => {
            return <StatsMeter key={statsMeter.id} statsMeter={statsMeter} handleClick={handleClick} />
        })
    }

    const renderTables = () => {
        return tables.map((table) => {
            return <Table key={table.id} table={table} />
        })
    }
    return (
        <>
            <div className="row">{renderStatsMeters()}</div>
            <div className="row">{renderTables()}</div>
        </>
    )
}

export default StatsMeterList