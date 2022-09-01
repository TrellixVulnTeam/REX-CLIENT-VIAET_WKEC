import { useState } from "react";
import StatsMeter from "./StatsMeter"
import Table from "./Table";

function StatsMeterList({ faculty, college, department, employee }) {
    // Meters
    const staticStatsMeters = [
        { id: 1, count: faculty.length, name: "Faculties", color: "bg-info", icon: "ion-university" },
        { id: 2, count: college.length, name: "Colleges", color: "bg-success", icon: "ion-podium" },
        { id: 3, count: department.length, name: "Departments", color: "bg-warning", icon: "ion-erlenmeyer-flask" },
        { id: 4, count: employee.length, name: "Employees", color: "bg-danger", icon: "ion-person" }
    ];
    const [statsMeters, setStatsMeters] = useState(staticStatsMeters);

    // Tables
    const staticTables = [
        { id: 5, obj: faculty, title: "Faculty Details", headings: ["Sr", "ID", "Name", "Official Link"] },
        { id: 6, obj: college, title: "College Details", headings: ["Sr", "ID", "Name", "Official Link"] },
        { id: 7, obj: department, title: "Department Details", headings: ["Sr", "ID", "Name", "Official Link"] },
        { id: 8, obj: employee, title: "Employee Details", headings: ["Sr", "Emp ID", "Prefix1", "Prefix2", "Name", "Designation", "Official Email", "Department", "Action"] }
    ];
    const [tables, setTables] = useState(staticTables);

    // Tables Shown/Hidden
    const staticTableShown = {
        showFacultyTable: false,
        showCollegeTable: false,
        showDepartmentTable: false,
        showEmployeeTable: false
    };
    const [isTableShown, setIsTableShown] = useState(staticTableShown);

    const handleClick = (e, id) => {
        e.preventDefault();
        let tempTableShown = [isTableShown];
        if (id - 1 === 0) {
            tempTableShown.showFacultyTable = true;
        }
        if (id - 1 === 1) {
            tempTableShown.showCollegeTable = true;
        }
        if (id - 1 === 2) {
            tempTableShown.showDepartmentTable = true;
        }
        if (id - 1 === 3) {
            tempTableShown.showEmployeeTable = true;
        }
        setIsTableShown(tempTableShown);
    }
    const closeButtonClick = (id) => {
        let tempTableShown = [isTableShown];
        if (id - 1 === 0) {
            tempTableShown.showFacultyTable = false;
        }
        if (id - 1 === 1) {
            tempTableShown.showCollegeTable = false;
        }
        if (id - 1 === 2) {
            tempTableShown.showDepartmentTable = false;
        }
        if (id - 1 === 3) {
            tempTableShown.showEmployeeTable = false;
        }
        setIsTableShown(tempTableShown);
    }

    const removeDataTableSpecificScript = () => {
        var me = document.querySelector('script[src="plugins/datatables/jquery.dataTableSpecificScript.js"]');
        if (me) {
            me.remove();
        }
    }

    const renderStatsMeters = () => {
        return statsMeters.map((statsMeter) => {
            return <StatsMeter key={statsMeter.id} statsMeter={statsMeter} handleClick={handleClick} />
        })
    }

    const renderTables = () => {
        return (
            <>
                {isTableShown.showFacultyTable && <Table key={tables[0].id} table={tables[0]} closeButtonClick={closeButtonClick} />}
                {isTableShown.showCollegeTable && <Table key={tables[1].id} table={tables[1]} closeButtonClick={closeButtonClick} />}
                {isTableShown.showDepartmentTable && <Table key={tables[2].id} table={tables[2]} closeButtonClick={closeButtonClick} />}
                {isTableShown.showEmployeeTable && <Table key={tables[3].id} table={tables[3]} closeButtonClick={closeButtonClick} />}
            </>
        )
    }

    return (
        <>
            <div className="row">{renderStatsMeters()}</div>
            {removeDataTableSpecificScript()}
            <div className="row">{renderTables()}</div>
        </>
    )
}

export default StatsMeterList