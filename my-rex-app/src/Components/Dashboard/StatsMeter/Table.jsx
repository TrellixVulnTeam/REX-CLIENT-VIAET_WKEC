function Table({ table }) {
  const renderTableHeadings = ()=> {
    return table.headings.map((heading) => {
      return <th key={table.headings.indexOf(heading)+1}>{heading}</th>
    })
  }
  const renderTableRows = ()=> {
    return table.obj.map((row) => {
      return console.log(row);
    })
  }
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{table.title}</h3>
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
              <tr>{renderTableHeadings()}</tr>
            </thead>
            <tbody>
              {
                // this.state.faculties.map(
                //   faculty =>
                //     <tr key={faculty.facultyId}>
                //       <td>{this.state.faculties.indexOf(faculty) + 1}</td>
                //       <td>{faculty.facultyId}</td>
                //       <td>{faculty.name}</td>
                //       <td><a href={faculty.link}>{faculty.link}</a></td>
                //     </tr>)
                renderTableRows()
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

export default Table