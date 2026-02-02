def calculate_dsi(z_score, total_spins, stability):
    sample_weight = min(1, total_spins / 2000)
    return round(abs(z_score) * sample_weight * stability, 2)

def classify_dsi(dsi):
    if dsi < 0.8:
        return "Ruido"
    elif dsi < 1.5:
        return "Observar"
    elif dsi < 2.5:
        return "Interesante"
    else:
        return "Anómalo"
