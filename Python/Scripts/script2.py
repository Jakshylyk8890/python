# Import required modules
import smtplib, ssl
import os
from pathlib import Path
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Define SMTP server details
smtp_server = "smtp.gmail.com"
port = 587  # For starttls 

# Define sender email and password
sender_email = "rraimova02@gmail.com"
recipient_email = "jakshylyk.ashyrmamatov@gmail.com"
password = "xbjaostryqbxxyfe"

# Define file path of attachment
filepath = os.path.expanduser('./index.html')

# Create a secure SSL context 
context = ssl.create_default_context()

# Try to log in to server and send email 
try: 
    # Connect to SMTP server
    server = smtplib.SMTP(smtp_server,port)
    
    # Identify ourselves to server
    server.ehlo() # Can be omitted 
    
    # Start TLS encryption
    server.starttls(context=context)
    
    # Re-identify ourselves after encryption
    server.ehlo() # Can be omitted 
    
    # Login to server
    server.login(sender_email, password)
    
    # Open the file in binary mode using 'with' statement
    with open(filepath, 'rb') as file:
        
        # Create a MIMEBase object with main and sub types
        attachment = MIMEBase('application', "octet-stream")
        
        # Set the payload of the attachment to the file content
        attachment.set_payload(file.read())
        
        # Encode the attachment with base64 encoding
        encoders.encode_base64(attachment)
        
        # Add header to attachment with file name
        attachment.add_header('Content-Disposition',
                              'attachment; filename={}'.format(Path(filepath).name))
        
        # Create a MIMEMultipart object
        envelope = MIMEMultipart()
        
        # Add subject to the email
        envelope['Subject'] = 'Tickets'
        
        # Add sender email to the email
        envelope['From'] = sender_email
        
        # Add recipient email to the email
        envelope['To'] = recipient_email
        
        # Add message to the email
        envelope.attach(MIMEText("Hello, Roza"))
        
        # Add attachment to the email
        envelope.attach(attachment)
    
    # Send the email
    server.sendmail(sender_email, recipient_email, envelope.as_string())

# Catch any exception that occurs
except Exception as e: 
    
    # Print the error message to stdout 
    print("Message: ", e) 

# Always execute this block of code to close the connection with server
finally: 
    server.quit()
