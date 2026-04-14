# Object Oriented Project 

## Thesis!
Wet days had lower average temperatures than dry days in Bradford, PA from Jan 1, 2025 to December 31, 2025.

## Data Source!
I used a free weather api that provided archived weather data
Link: https://archive-api.open-meteo.com/v1/archive

## How to Run!
This is ran by simply running the Main.Py file in the root of the folder structure.
Then the data will be printed in a cli format in the terminal.

## Data Structures Used!

### 1. List
  * Stores all weather records
  * Used for filtering and iteration

### 2. Dictionary
  * Groups Records by Month
  * Used for aggregation and fast lookup

## Big O Notes:
Overall, the program runs in O(n) time because there are no nested loops, and each record is processed a small number of times during cleaning, filtering, grouping, and analysis. 

Dictionary (hash table) operations such as insertion and lookup run in O(1) time on average, which makes grouping efficient.

## Findings
Overall, the results were inconclusive. This may be due to the fact that precipitation includes both rain and snow, which occur under different temperature conditions. Snow typically occurs at colder temperatures, while rain occurs at warmer temperatures, which can affect the overall averages. 

Because of this, the data still appears accurate for the Bradford, PA area, but the variation in precipitation types may have influenced the outcome of the analysis.