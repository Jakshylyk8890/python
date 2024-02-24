import json
import requests

if __name__ == "__main__":
    with open('./token.json', 'rb') as file:
        data = json.load(file)
headers = {
    "Authorization": f"Bearer {data.get('token')}"
}

para = {
    "name":"file.txt",
    "parents":["1TgUXQAqTv2n6m1X0STyiMx-tMalvbWqi"]
}

files = {
    'data':('metadata',json.dumps(para),'application/json;charset=UTF-8'),
    'file':open('./file.txt','rb')
}

r = requests.post("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    headers=headers,
    files=files
)

print(r.content)