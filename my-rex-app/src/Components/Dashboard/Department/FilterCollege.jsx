function FilterCollege({ faculty,onFilterValueSelected }) {

    let myarr = faculty.map(fac => {
        return fac.colleges.map(college => {
            return college
        })
    })
    const renderColleges = () => {
        return myarr.map(val => {
            return val.map(v => {
                return <a className="dropdown-item" tabIndex={-1} href="#" key={v.collegeId} onClick={() => onFilterValueChanged(v.collegeId)}>{v.collegeId}</a>
            })
        })
    }
     function onFilterValueChanged(collegeId) {
        onFilterValueSelected(collegeId);
     }

    return (
        <div>
            <div className="card-header d-flex p-0">
                {/* <h3 className="card-title p-3">Tabs</h3> */}
                <h3 className="mt-4 mb-4">Colleges</h3>
                <ul className="nav nav-pills ml-auto p-2">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle active" data-toggle="dropdown" href="#">
                            Dropdown <span className="caret" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            {renderColleges()}
                            {/* <a className="dropdown-item" tabIndex={-1} href="#">Action</a>
                            <a className="dropdown-item" tabIndex={-1} href="#">Another action</a>
                            <a className="dropdown-item" tabIndex={-1} href="#">Something else here</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" tabIndex={-1} href="#">Separated link</a> */}
                        </div>
                    </li>
                </ul>
            </div>
            {/* /.card-header */}
        </div>
    )
}

export default FilterCollege