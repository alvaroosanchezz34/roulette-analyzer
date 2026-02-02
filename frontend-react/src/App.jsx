import { useState } from "react";
import AnalyzerForm from "./components/AnalyzerForm";
import ResultsTable from "./components/ResultsTable";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hint, setHint] = useState("");

  async function analyze(numbers) {
    setLoading(true);
    setHint("");
    setResults([]);

    if (numbers.length < 30) {
      setHint("⚠️ Datos insuficientes. Se recomiendan al menos 30 tiradas.");
    }

    try {
      const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ results: numbers })
      });

      const data = await response.json();
      setResults(data.top_results);

      if (!data.top_results.length) {
        setHint("No se detectan desviaciones relevantes con los datos actuales.");
      }
    } catch (e) {
      setHint("❌ Error conectando con la API.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>🎰 Roulette Analyzer</h1>

      <AnalyzerForm onAnalyze={analyze} />

      {loading && <p>⏳ Analizando…</p>}
      {hint && <p style={{ opacity: 0.8 }}>{hint}</p>}

      <ResultsTable results={results} />
    </div>
  );
}

export default App;
