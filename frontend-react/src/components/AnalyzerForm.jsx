import { useState } from "react";

function AnalyzerForm({ onAnalyze }) {
    const [input, setInput] = useState(
        "32,15,7,32,0,26,32,19,7,32,14,32,6,32,20"
    );

    function handleSubmit(e) {
        e.preventDefault();

        const numbers = input
            .split(",")
            .map(n => parseInt(n.trim()))
            .filter(n => !isNaN(n));

        onAnalyze(numbers);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Pega los resultados separados por comas:</p>
            <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{ width: "100%", height: "100px" }}
            />
            <br />
            <button style={{ marginTop: "10px" }}>
                Analizar
            </button>
        </form>
    );
}

export default AnalyzerForm;
