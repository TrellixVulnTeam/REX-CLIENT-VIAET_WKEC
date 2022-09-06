function DepartmentCard({ department }) {
    const renderHeadName = () => {
        if (department.head) {
            return department.head.prefix1 + ". " + department.head.prefix2 + ". " +
                department.head.fname +
                (department.head.mname.length === 0 ? " " : " " + department.head.mname + " ") + department.head.lname +
                " (" + department.head.designation + ") ";
        }
    }
    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    const setRandomColor = () => {
        const existingElement = document.getElementById('colorpad');
        console.log(existingElement);
    }
    return (
        <>
            <div>
                {/* <h3 className="mt-4 mb-4">VIAET</h3> */}
                <div className="row">
                    <div className="col-lg-12">
                        {/* Widget: user widget style 2 */}
                        <div className="card card-widget widget-user-2 collapsed-card">
                            {/* Add the bg color to the header using any of the bg-* classes */}
                            <div className="card-header" id="colorpad" aria-expanded="false" data-card-widget="collapse">
                                <div className="card-title">
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src="../dist/img/user7-128x128.jpg" alt="User Avatar" />
                                    </div>
                                    {/* /.widget-user-image */}
                                    <h3 className="widget-user-username">{department.name}</h3>
                                    <h5 className="widget-user-desc">{renderHeadName()}</h5>
                                </div>
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer p-0">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Courses <span className="float-right badge bg-primary">31</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Students Detail <span className="float-right badge bg-info">5</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Faculties <span className="float-right badge bg-success">12</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            Results <span className="float-right badge bg-danger">842</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* /.widget-user */}
                    </div>
                    {/* /.col */}
                    {setRandomColor()}
                </div>
                {/* /.row */}
            </div>

        </>
    )
}

export default DepartmentCard