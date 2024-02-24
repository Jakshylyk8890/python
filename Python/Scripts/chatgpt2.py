from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Replace with the path to your service account JSON file
SERVICE_ACCOUNT_FILE = 'chatgpt.json'

# Replace with the ID of the folder you want to upload the file to
FOLDER_ID = '1TgUXQAqTv2n6m1X0STyiMx-tMalvbWqi'

# Replace with the path to the file you want to upload
FILE_PATH = 'file2.txt'

# Authenticate and build the Drive API client
creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=['https://www.googleapis.com/auth/drive'])
drive_service = build('drive', 'v3', credentials=creds)

# Create the metadata for the new file
file_metadata = {'name': 'file2.txt', 'parents': [FOLDER_ID]}

# Upload the file to Drive
try:
    media = drive_service.files().create(
        body=file_metadata,
        media_body=FILE_PATH,
        fields='id'
    ).execute()
    print('File ID: %s' % media.get('id'))
    
except HttpError as error:
    print('An error occurred: %s' % error)
