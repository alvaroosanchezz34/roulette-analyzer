async function analyze() {
    const input = document.getElementById("resultsInput").value;
    const numbers = input
        .split(",")
        .map(n => parseInt(n.trim()))
        .filter(n => !isNaN(n));

    const output = document.getElementById("output");
    const hint = document.getElementById("hint");
    output.innerHTML = "";
    hint.textContent = "";

    if (numbers.length < 30) {
        hint.textContent = "⚠️ Datos insuficientes. Se recomiendan al menos 30 tiradas.";
    }

    const response = await fetch("http://127.0.0.1:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ results: numbers })
    });

    const data = await response.json();

    data.top_results.forEach(r => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${r.number}</td>
      <td>${r.z_score}</td>
      <td>${r.stability}</td>
      <td>${r.dsi}</td>
      <td class="state-${r.state}">${r.state}</td>
    `;
        output.appendChild(row);
    });

    if (data.top_results.length === 0) {
        hint.textContent = "No se detectan desviaciones relevantes con los datos actuales.";
    }
}
