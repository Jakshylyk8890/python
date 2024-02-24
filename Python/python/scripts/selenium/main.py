from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Replace "path_to_chromedriver" with the actual path to your Chrome WebDriver executable
chrome_options = Options()
chrome_options.binary_location = "path_to_chrome_binary"  # Optional, set this if Chrome binary is in a non-default location

# If the Chrome WebDriver is in the system's PATH, you can omit the executable path
driver = webdriver.Chrome(options=chrome_options)

# Replace the URL with the actual URL of the cloud playground
driver.get("https://learn.acloud.guru/cloud-playground/cloud-sandboxes")

try:
    # Replace "sandbox_create_button_id" with the ID of the "Create Sandbox" button
    create_button = driver.find_element_by_id("sandbox_create_button_id")
    create_button.click()
except Exception as e:
    print(f"Error: {e}")

try:
    # Replace "input_name_id" with the ID of the input field for providing the sandbox name
    sandbox_name_input = driver.find_element_by_id("input_name_id")
    sandbox_name_input.send_keys("My Sandbox Name")

    # Replace "input_description_id" with the ID of the input field for providing the sandbox description
    sandbox_description_input = driver.find_element_by_id("input_description_id")
    sandbox_description_input.send_keys("My Sandbox Description")

    # Replace "sandbox_create_submit_button_id" with the ID of the "Create Sandbox" submit button
    submit_button = driver.find_element_by_id("sandbox_create_submit_button_id")
    submit_button.click()
except Exception as e:
    print(f"Error: {e}")
driver.quit()
