import requests

class ApiClient:
    def fetch_weather_data(self, latitude: float, longitude: float, start_date: str, end_date: str) -> dict:
        url = "https://archive-api.open-meteo.com/v1/archive"
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "start_date": start_date,
            "end_date": end_date,
            "daily": "temperature_2m_mean,precipitation_sum",
            "timezone": "auto"
        }

        response = requests.get(url, params=params, timeout=30)
        response.raise_for_status()
        return response.json()