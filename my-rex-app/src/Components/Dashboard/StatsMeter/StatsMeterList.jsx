import StatsMeter from "./StatsMeter"

function StatsMeterList({ statsMeters }) {
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