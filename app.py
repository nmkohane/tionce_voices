import csv
import json
import pathlib
import os
from pathlib import Path
import re
import copy
import webbrowser
from flask import Flask, request, jsonify, render_template
from core import Config, gen_filename, create_dir

config = Config(__file__)
app = Flask(__name__)

@app.route('/api/save_data', methods=['GET', 'POST'])
def save_data():
    """Clean CSV string sent by jsPsych frontend and data in a CSV file."""
    content = request.json

    # creates the study's main CSV file, if it doesn't exist already
    desktop = os.path.expanduser("~\\Desktop")
    longterm_file = desktop + "\\longterm_csv_results"
    Path(longterm_file).mkdir(parents=True, exist_ok=True)

    output_csv = []
    for row in content['data'].split('\r\n'):
        output_csv.append(row.replace('"', '').split(','))

    # retrieve the id from the CSV
    id_ = output_csv[2][7].split(':')[1].replace('}', '')

    # now we will insert the id into each row of the csv
    output_csv[0].insert(0, 'participant_id') 
    # creating additional columns for new tests
    output_csv[0].insert(14, 'stim_type')
    first_line = output_csv[0]
    output_csv = output_csv[1:]
    output_csv = output_csv[:-1]

    for row in output_csv:

        row.insert(0, id_)
        # shift columns and rows based on their values
        if row[10] == '':
            row.insert(14, '')
            
        else:
            if row[10].split(".")[2] == "congr":
                row.insert(14, "con")
            else:
                row.insert(14, row[10].split(".")[2])

    # create an individual file for the current test being taken by the participant
    output_csv_short = copy.deepcopy(output_csv)
    output_csv_short = [first_line] + output_csv

    # main CSV file's location
    filename = gen_filename(id_, content['study'])
    longterm_file_addr = desktop + "\\longterm_csv_results\\longterm_test_results.csv" 
    datafile = config.data_dir/filename

    # populate files
    with open(datafile, 'w', newline="") as d:
        writer = csv.writer(d)
        writer.writerows(output_csv_short)

    with open(longterm_file_addr, "a", newline="") as f:
        writer = csv.writer(f)
        writer.writerows(output_csv)

    print("Completed test")
    
    # collect results
    return jsonify({
        filename: filename,
    })

@app.route('/')
def index():
    """Main entry-point to serve the jsPsych frontend."""
    return render_template("index.html")
 
if __name__ == '__main__':
    webbrowser.open("http://127.0.0.1:5000/")
    print("Server on")
    print("Reminder: to turn off the program, simply close this window. To turn it on again, double-click on the run_tionce.bat file.")
    app.run()