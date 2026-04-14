from Domain.Thesis import Thesis
from Domain.AnalysisResult import AnalysisResult

class WeatherAnalyzer:
    def analyze(self, records, thesis: Thesis) -> AnalysisResult:
        wet_days = [r for r in records if r.precipitation > thesis.precipitation_threshold]
        dry_days = [r for r in records if r.precipitation <= thesis.precipitation_threshold]

        wet_avg = sum(r.avg_temperature for r in wet_days) / len(wet_days) if wet_days else 0
        dry_avg = sum(r.avg_temperature for r in dry_days) / len(dry_days) if dry_days else 0

        difference = wet_avg - dry_avg
        supported = wet_avg < dry_avg

        if supported:
            conclusion = "The thesis is supported: wet days were colder on average."
        else:
            conclusion = "The thesis is not supported: wet days were not colder on average."

        return AnalysisResult(
            wet_day_count=len(wet_days),
            dry_day_count=len(dry_days),
            wet_day_avg_temp=wet_avg,
            dry_day_avg_temp=dry_avg,
            difference=difference,
            thesis_supported=supported,
            conclusion=conclusion
        )