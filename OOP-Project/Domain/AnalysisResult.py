from dataclasses import dataclass

@dataclass
class AnalysisResult:
    wet_day_count: int
    dry_day_count: int
    wet_day_avg_temp: float
    dry_day_avg_temp: float
    difference: float
    thesis_supported: bool
    conclusion: str