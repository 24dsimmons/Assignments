from Domain.WeatherRecord import WeatherRecord

class WeatherNormalizer:
    def clean(self, raw_data: dict):
        records = []

        dates = raw_data["daily"]["time"]
        temps = raw_data["daily"]["temperature_2m_mean"]
        precipitation = raw_data["daily"]["precipitation_sum"]

        for date, temp, rain in zip(dates, temps, precipitation):
            if temp is None or rain is None:
                continue

            record = WeatherRecord(
                date=date,
                avg_temperature=float(temp),
                precipitation=float(rain)
            )
            records.append(record)

        return records