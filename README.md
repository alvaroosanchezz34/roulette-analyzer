# 🎰 Roulette Analyzer

Herramienta de análisis estadístico para ruletas físicas basada en desviaciones
probabilísticas y estabilidad temporal.

⚠️ Este proyecto **no predice resultados ni garantiza beneficios económicos**.
Está diseñado con fines educativos y de análisis estadístico.

---

## 🧠 ¿Qué hace?

- Analiza históricos de tiradas de ruleta
- Detecta desviaciones estadísticas (Z-score)
- Evalúa estabilidad temporal (ventanas deslizantes)
- Calcula un índice propio: **DSI (Deviation Stability Index)**
- Muestra resultados de forma clara y honesta

---

## 🏗️ Arquitectura

- **Backend**: Python + FastAPI  
- **Motor**: Estadística + ventanas + DSI  
- **Frontend**: React (Vite)  
- **Comunicación**: API REST (JSON)

---

## 📊 Métrica principal: DSI

DSI = |Z-score| × sample_weight × stability


El DSI penaliza:
- Pocas muestras
- Rachas no estables
- Resultados volátiles

---

## 🚀 Cómo ejecutar en local

### Backend
```bash
python -m uvicorn app.api:app --reload
```

---

### Frontend
```bash
npm install
npm run dev
```

---

## 📎 Disclaimer

Esta herramienta no está destinada al juego ni a la toma de decisiones financieras.
No se garantiza ningún resultado.
