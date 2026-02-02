import math

EXPECTED_PROB = 1 / 37

def calculate_z_score(observed, total_spins):
    if total_spins == 0:
        return 0

    observed_prob = observed / total_spins
    deviation = observed_prob - EXPECTED_PROB

    std = math.sqrt(EXPECTED_PROB * (1 - EXPECTED_PROB) / total_spins)
    if std == 0:
        return 0

    return deviation / std
