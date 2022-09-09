import CoursesTabCard from "./CoursesTabCard";

function DepartmentCard({ department }) {
    const renderHeadName = () => {
        if (department.head) {
            return department.head.prefix1 + ". " + department.head.prefix2 + ". " +
                department.head.fname +
                (department.head.mname.length === 0 ? " " : " " + department.head.mname + " ") + department.head.lname +
                " (" + department.head.designation + ") ";
        }
    }
    const renderPrfilePic = () => {
        if (department.head) {
            return "../dist/img/employee/" + department.head.empID + ".jpg"
        }
        else
            return "../dist/img/employee/user.png"
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    {/* Widget: user widget style 2 */}
                    <div className="card card-widget widget-user-2 collapsed-card">
                        {/* Add the bg color to the header using any of the bg-* classes */}
                        <a href="#">
                            <div className="card-header bg-white" aria-expanded="false" data-card-widget="collapse" >
                                <div className="card-title">
                                    <div className="widget-user-image">
                                        <img className="img-circle elevation-2" src={renderPrfilePic()} alt="User Avatar" />
                                    </div>
                                    {/* /.widget-user-image */}
                                    <h3 className="widget-user-username">{department.name}</h3>
                                    <h5 className="widget-user-desc">{renderHeadName()}</h5>
                                </div>
                                {/* <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div> */}
                            </div>
                        </a>
                        <div className="card-footer p-0">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <div className="card-body">
                                        {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
                                        <div id="accordion">
                                            <div className="card card-white">
                                                <div className="card-header">
                                                    <h4 className="card-title w-100">
                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                                            Courses <span className="float-right badge bg-info">5</span>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="collapse" data-parent="#accordion">
                                                    <div className="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                        3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                        nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                        beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                        labore sustainable VHS.
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                        3
                                                        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                        laborum
                                                        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                        nulla
                                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                        beer
                                                        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                        labore sustainable VHS.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                </li>
                                <li className="nav-item">
                                    <div className="card card-white">
                                        <div className="card-header">
                                            <h4 className="card-title w-100">
                                                <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                                    Student Detail <span className="float-right badge bg-success">12</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="card card-white">
                                        <div className="card-header">
                                            <h4 className="card-title w-100">
                                                <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                                    Faculties <span className="float-right badge bg-info">50</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="card card-white">
                                        <div className="card-header">
                                            <h4 className="card-title w-100">
                                                <a className="d-block w-100" data-toggle="collapse" href="#collapseFour">
                                                    Results <span className="float-right badge bg-danger">500</span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour" className="collapse" data-parent="#accordion">
                                            <div className="card-body">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                3
                                                wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                                laborum
                                                eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                                                nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer
                                                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
                                                labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /.widget-user */}
                </div>
                {/* /.col */}
            </div>

        </>
    )
}

export default DepartmentCard