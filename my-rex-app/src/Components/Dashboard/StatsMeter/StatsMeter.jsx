import { useEffect, useState } from "react";

function StatsMeter({ statsMeter }) {
    
    return (
        <div className="col-lg-3 col-6">
            {/* small box */}
            <div className={`small-box ${statsMeter.color}`}>
                <div className="inner">
                    <h3>{statsMeter.count}</h3>
                    <p>{statsMeter.name}</p>
                </div>
                <div className="icon">
                    <i className={`ion ${statsMeter.icon}`} />
                </div>
                <a href="#" className="small-box-footer" >More info <i className="fas fa-arrow-circle-right" /></a>
            </div>
        </div>
    )
}

export default StatsMeter