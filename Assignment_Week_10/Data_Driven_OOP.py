# GOALS:
# Come up with a thesis/theroy and build a small oop application that.
#1. Pulls real data from a free API or open dataset
#2. store/transforms it using an appropriate data structures.
#3. Outputs evidence for or against your thesis. 
from dotenv import load_dotenv
import os
import base64
from requests import post
import json

load_dotenv()


client_ID = os.getenv ("CLIENT_ID")
client_SECRET = os.getenv ("CLIENT_SECRET")

print(client_ID, client_SECRET)

def get_token():
    auth_string = client_ID + ":" +client_SECRET
    auth_bytes= auth_string.encode("utf-8")
    auth_base64 = str(base64.b64encode(auth_base64), "utf-8")

    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Authorization": "Basic" + auth_base64, 
        "Content-Type": "application/x-www-form-urlencoded"
    }

    data = {"grant_type": "client_credentials"}
    result = post(url, headers=headers, data =data)
    json_result = json.loads(result.content)
    token = json_result["access_token"]
    return token

token= get_token()
print(token)