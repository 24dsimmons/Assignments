
from Persistence.Repository import WeatherRepository # Calling classes from other files in the data structure.
from Services.Analyzer import WeatherAnalyzer
from Services.Normalizer import WeatherNormalizer
from Domain.Thesis import Thesis
from Persistence.ApiClient import ApiClient

def main():
    thesis = Thesis(
        statement="Wet days had lower average temperatures than dry days in Bradford, PA from Jan 1, 2025 to December 31, 2025.",
        location="Bradford, PA",
        start_date="2025-01-01",
        end_date="2025-12-31", 
        precipitation_threshold=5.0 #Added so threshold wasnt defaulted to 0 providing no results for total precip.
    )

    api_client = ApiClient()
    repository = WeatherRepository()
    normalizer = WeatherNormalizer()
    analyzer = WeatherAnalyzer()

    # Bradford, PA approximate coordinates
    raw_data = api_client.fetch_weather_data(
        latitude=41.9565,
        longitude=-78.6492,
        start_date=thesis.start_date,
        end_date=thesis.end_date
    )

    records = normalizer.clean(raw_data)
    repository.save_all(records)

    result = analyzer.analyze(repository.get_all(), thesis)

    print("\nTHESIS")
    print(thesis.statement)

    print("\nMonthly Results")
    print(f"{'month':<10} {'Avg Temp':<12}  {'Total Precip':<15}" )

    for month, stats in result.monthly_stats.items():
        print(f"{month:<10} {(stats['avg_temp'] * 9/5)+32:<12.2f} {stats['total_precip']:<15.2f}")

    print("\nRESULTS")
    print(f"Wet days: {result.wet_day_count}")
    print(f"Dry days: {result.dry_day_count}")
    print(f"Average temp on wet days: {(result.wet_day_avg_temp* 9/5) + 32 :.2f}")
    print(f"Average temp on dry days: {(result.dry_day_avg_temp * 9/5) + 32 :.2f}") # .2f rounds the number to 2 decimal places. 
    print(f"Difference (wet - dry): {(result.difference* 9/5):.2f}")
    print(f"Supported: {result.thesis_supported}")
    print(result.conclusion)


if __name__ == "__main__":
    main()