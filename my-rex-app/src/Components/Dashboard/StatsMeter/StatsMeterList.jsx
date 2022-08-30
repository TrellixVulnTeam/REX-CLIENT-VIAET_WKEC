import { useState } from "react";
import StatsMeter from "./StatsMeter"

function StatsMeterList({ faculty, college, department, employee }) {

    const staticStatsMeters = [
        { id: 1, count: faculty.length, name: "Faculties", color: "bg-info", icon: "ion-bag" },
        { id: 2, count: college.length, name: "Colleges", color: "bg-success", icon: "ion-stats-bars" },
        { id: 3, count: department.length, name: "Departments", color: "bg-warning", icon: "ion-person-add" },
        { id: 4, count: employee.length, name: "Employees", color: "bg-danger", icon: "ion-pie-graph" }
    ];
    const [statsMeters, setStatsMeters] = useState(staticStatsMeters);

    const renderStatsMeters = () => {
        return statsMeters.map((statsMeter) => {
            return <StatsMeter key={statsMeter.id} statsMeter={statsMeter} />
        })
    }
    return (
        <div className="row">{renderStatsMeters()}</div>
    )
}

export default StatsMeterList