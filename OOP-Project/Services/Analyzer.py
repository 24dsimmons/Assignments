from Domain.Thesis import Thesis
from Domain.AnalysisResult import AnalysisResult

class WeatherAnalyzer:
    def analyze(self, records, thesis: Thesis) -> AnalysisResult:
        filtered_records =[
            r for r in records
            if r.precipitation <= thesis.precipitation_threshold
        ]

        mounthly_groups = {}

        for record in filtered_records:
            month = record.date[:7]

            if month not in mounthly_groups:
                mounthly_groups[month] = []
            mounthly_groups[month].append(record)
        
        monthly_stats = {}
        for month, recs in mounthly_groups.items(): #Taking records for one month
            avg_temp = sum(r.avg_temperature for r in recs) / len(recs) 

            total_precip = sum(r.precipitation for r in recs) #total precipiation in a month.

            monthly_stats[month] = {
                "avg_temp": avg_temp, 
                "total_precip": total_precip
            } 

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
            conclusion=conclusion,
            monthly_stats=monthly_stats
        )