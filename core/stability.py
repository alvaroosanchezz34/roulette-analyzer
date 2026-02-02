from collections import Counter
from core.statistics import calculate_z_score

def analyze_windows(results, window_sizes, z_threshold=2):
    stability_counter = {n: 0 for n in range(37)}
    valid_windows = 0

    for size in window_sizes:
        if len(results) < size:
            continue

        window = results[-size:]
        counts = Counter(window)
        valid_windows += 1

        for number in range(37):
            observed = counts.get(number, 0)
            z = calculate_z_score(observed, size)

            if abs(z) >= z_threshold:
                stability_counter[number] += 1

    return stability_counter, valid_windows
