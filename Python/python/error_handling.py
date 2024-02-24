import sys

file_name = 'recipes.txt'  
# Attempt to create a new file and write to it.
try:
    # 'x' mode is for creating a new file. An error is raised if the file exists.
    my_file = open(file_name, 'x')
    # Write a line of text to the newly created file.
    my_file.write('Meatballs\n')
    # Close the file to ensure data is written and resources are freed.
    my_file.close()
except FileExistsError as err:  # This block handles the case where the file already exists.
    print(f'The {file_name} already exists')
    # Exit the program because the file was not written to.
    sys.exit()
except:  # This block catches any other exceptions that were not specifically caught.
    print(f'Unable to write to the file')
else:  # This block executes if the try block succeeds without exceptions.
    print(f'Wrote to {file_name}')
finally:  # This block will execute no matter what happens above, success or exception.
    print('Execution completed')
