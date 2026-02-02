function stateColor(state) {
    switch (state) {
        case "Anómalo": return "#ef4444";
        case "Interesante": return "#fb923c";
        case "Observar": return "#facc15";
        default: return "#9ca3af";
    }
}

function ResultsTable({ results }) {
    if (!results.length) return null;

    return (
        <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th>Número</th>
                    <th>Z</th>
                    <th>Estabilidad</th>
                    <th>DSI</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {results.map(r => (
                    <tr key={r.number}>
                        <td>{r.number}</td>
                        <td>{r.z_score}</td>
                        <td>{r.stability}</td>
                        <td>{r.dsi}</td>
                        <td style={{ color: stateColor(r.state), fontWeight: 600 }}>
                            {r.state}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ResultsTable;
