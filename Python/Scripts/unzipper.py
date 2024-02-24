#!/usr/bin/env python3
import sys
from zipfile import ZipFile,BadZipFile

def extract_zip_files(file_list):
  print(file_list)
  for zip_file in file_list:
    try:
      with ZipFile(zip_file, 'r') as z:
          print(f"Extracting{zip_file}...")
          z.extractall()
          print(f"Done extracting {zip_file}")
    except BadZipFile:
        print(f"Error: The file {zip_file} is not a valid zip file or it is corrupted.")
    except FileNotFoundError:
        print(f"Error: The file {zip_file} does not exist.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        extract_zip_files(sys.argv[1:])
    else:
        print("Please provide at least one zip file as an argument.")
