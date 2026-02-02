from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

from app.main import run_analysis

app = FastAPI(title="Roulette Analyzer API")

# 🔓 CORS (permite llamadas desde el frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # en producción se limita
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----- MODELO DE ENTRADA -----

class RouletteInput(BaseModel):
    results: List[int]

# ----- ENDPOINT -----

@app.post("/analyze")
def analyze_roulette(data: RouletteInput):
    analysis = run_analysis(data.results)
    return {
        "total_spins": len(data.results),
        "top_results": analysis[:5]
    }
