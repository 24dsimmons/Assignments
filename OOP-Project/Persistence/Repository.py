class WeatherRepository:
    def __init__(self):
        self._records = []

    def save_all(self, records):
        self._records.extend(records)

    def get_all(self):
        return self._records