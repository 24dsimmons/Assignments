from dataclasses import dataclass

@dataclass
class Thesis:
    statement: str
    location: str
    start_date: str
    end_date: str
    precipitation_threshold: float = 0.0