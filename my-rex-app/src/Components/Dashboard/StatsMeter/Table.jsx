import { useState } from "react"

function Table({ table, closeButtonClick }) {

  const renderTableHeadings = () => {
    return table.headings.map((heading) => {
      return <th key={table.headings.indexOf(heading) + 1}>{heading}</th>
    })
  }
  const renderTableRows = () => {
    if (table.id === 5) {
      return table.obj.map((row) => {
        return (
          <tr key={row.facultyId}>
            <td>{table.obj.indexOf(row) + 1}</td>
            <td>{row.facultyId}</td>
            <td>{row.name}</td>
            <td><a href={row.link} target="_blank">{row.link}</a></td>
          </tr>)
      })
    }
    if (table.id === 6) {
      return table.obj.map((row) => {
        return (
          <tr key={row.collegeId}>
            <td>{table.obj.indexOf(row) + 1}</td>
            <td>{row.collegeId}</td>
            <td>{row.name}</td>
            <td><a href={row.link} target="_blank">{row.link}</a></td>
          </tr>)
      })
    }
    if (table.id === 7) {
      return table.obj.map((row) => {
        return (
          <tr key={row.departmentId}>
            <td>{table.obj.indexOf(row) + 1}</td>
            <td>{row.departmentId}</td>
            <td>{row.name}</td>
            <td><a href={row.link} target="_blank">{row.link}</a></td>
          </tr>)
      })
    }
    if (table.id === 8) {
      return table.obj.map((row) => {
        return (
          <tr key={row.empID}>
            <td>{table.obj.indexOf(row) + 1}</td>
            <td>{row.empID}</td>
            <td>{row.prefix1}</td>
            <td>{row.prefix2}</td>
            <td>{row.fname + (row.mname.length === 0 ? " " : " " + row.mname + " ") + row.lname}</td>
            <td>{row.designation}</td>
            <td>{row.email}</td>
            <td>{row.departmentID}</td>
            <td><button className="btn btn-block btn-info">Details</button></td>
          </tr>)
      })
    }
  }
  const loadDataTableSpecificScript = (callback) => {
    const existingScript = document.getElementById('example1');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'plugins/datatables/jquery.dataTableSpecificScript.js';
      script.id = 'example1';
      document.body.appendChild(script);
      script.onload = () => {
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  

  return (
    <div className="col-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">{table.title}</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
              <i className="fas fa-minus" />
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove" onClick={() => closeButtonClick(table.id)}>
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
              {renderTableRows()}
            </tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}
      {loadDataTableSpecificScript()}
    </div>
  )
}

export default Table