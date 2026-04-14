from dataclasses import dataclass

@dataclass
class WeatherRecord:
    date: str
    avg_temperature: float
    precipitation: float

    @property
    def is_wet_day(self) -> bool:
        return self.precipitation > 0