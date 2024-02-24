import pyautogui
import time

# Open Telegram via system search or by locating the icon position
# pyautogui.press('winleft')  # Press the Windows key
# pyautogui.typewrite('Telegram')
# pyautogui.press('enter')
# time.sleep(5)

# Alternatively, if you know the position of the Telegram icon on your desktop or taskbar, you can do:
# pyautogui.click(x_icon_position, y_icon_position)

# Click on the search bar - replace with the actual coordinates of your search bar
pyautogui.click(x=100, y=200)
time.sleep(2)

# Type the name of the contact
contact_name = "Contact Name"
pyautogui.typewrite(contact_name)
time.sleep(2)

# Click on the contact in the contact list - replace with the actual coordinates of the contact in the list
pyautogui.click(x=100, y=300)
time.sleep(2)

# Click on the message input box - replace with the actual coordinates of your message box
pyautogui.click(x=500, y=800)
time.sleep(2)

# Type your message
message = "Hello from PyAutoGUI!"
pyautogui.typewrite(message)
time.sleep(2)

# Press the Enter key to send the message
pyautogui.press('enter')
