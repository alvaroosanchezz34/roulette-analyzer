from collections import Counter

from core.statistics import calculate_z_score
from core.stability import analyze_windows
from core.dsi import calculate_dsi, classify_dsi

results = [
    32, 15, 7, 32, 0, 26, 32, 19,
    7, 32, 14, 32, 6, 32, 20,
    32, 32, 7, 14, 32
]

WINDOW_SIZES = [10, 15, 20]

def run_analysis(results):
    total_spins = len(results)
    counts = Counter(results)

    stability_data, windows = analyze_windows(
        results,
        WINDOW_SIZES,
        z_threshold=2
    )

    output = []

    for number in range(37):
        observed = counts.get(number, 0)
        z = calculate_z_score(observed, total_spins)

        stability = (
            stability_data[number] / windows
            if windows > 0 else 0
        )

        dsi = calculate_dsi(z, total_spins, stability)
        state = classify_dsi(dsi)

        output.append({
            "number": number,
            "z_score": round(z, 2),
            "stability": round(stability, 2),
            "dsi": dsi,
            "state": state
        })

    return sorted(output, key=lambda x: x["dsi"], reverse=True)

if __name__ == "__main__":
    results_dsi = run_analysis(results)

    print("📈 TOP DSI")
    print("-" * 40)
    for r in results_dsi[:5]:
        print(r)
