# GOALS:
# Come up with a thesis/theroy and build a small oop application that.
#1. Pulls real data from a free API or open dataset
#2. store/transforms it using an appropriate data structures.
#3. Outputs evidence for or against your thesis. 


import json
import urllib.request

url = "http://api.open-notify.org/astros.json"
response = urllib.request.urlopen(url)
result = json.loads(response.read())
print(result)