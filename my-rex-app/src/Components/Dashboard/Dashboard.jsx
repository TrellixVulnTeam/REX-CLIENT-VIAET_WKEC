import React from 'react'
import StatsMeter from './StatsMeter'

function Dashboard() {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard v1</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <StatsMeter text={"200"}/>
                    {/* /.row */}
                    {/* Main row */}

                    <div className="row">
                        {/* Left col */}
                        <section className="col-lg-7 connectedSortable">
                            {/* Custom tabs (Charts with tabs) Sales Card*/}
                            
                            {/* /.card */}
                            {/* DIRECT CHAT */}
                            
                            {/*/.direct-chat */}
                            {/* TO DO List */}
                            
                            {/* /.Todocard */}
                        </section>
                        {/* /.Left col */}
                        {/* right col (We are only adding the ID to make the widgets sortable)*/}
                        <section className="col-lg-5 connectedSortable">
                            {/* Map card */}
                            
                            {/* /. Map card */}
                            {/* solid sales graph */}
                            
                            {/* /.Solid Sales card */}
                            {/* Calendar */}
                            
                            {/* / Calendar .card */}
                        </section>
                        {/* right col */}
                    </div>
                    {/* /.row (main row) */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    )
}

export default Dashboard