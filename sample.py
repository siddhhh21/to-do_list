import os
import shutil

# Create folders
os.makedirs("src", exist_ok=True)
os.makedirs("public", exist_ok=True)

# Move files into src folder
files_to_move = ["App.js", "App.css", "index.js"]

for file in files_to_move:
    if os.path.exists(file):
        shutil.move(file, f"src/{file}")

print("Folders created and files rearranged successfully!")