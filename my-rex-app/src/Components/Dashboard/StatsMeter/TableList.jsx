function TableList() {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Faculty Details</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
              <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card-body">
          <table id="example1" className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Sr.</th>
                <th>ID</th>
                <th>Name</th>
                <th>Official Link</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.faculties.map(
                  faculty =>
                    <tr key={faculty.facultyId}>
                      <td>{this.state.faculties.indexOf(faculty) + 1}</td>
                      <td>{faculty.facultyId}</td>
                      <td>{faculty.name}</td>
                      <td><a href={faculty.link}>{faculty.link}</a></td>
                    </tr>)
              }
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
    </div>
  )
}

export default TableList