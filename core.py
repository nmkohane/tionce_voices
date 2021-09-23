from datetime import datetime
from pathlib import Path
import os

class Config:
    def __init__(self, project_dir):
        self.project_path = Path(path_of(project_dir))
        
        self.data_dir = self.project_path/'data'
        
        # the location of the main file used in the study
        self.longterm = os.path.expanduser("~\\Desktop") + "\\results"
        
        create_dir(self.data_dir)



# begin: helper functions

def create_dir(Path_obj):
    """Pathlib mkdir wrapper for better syntax and defaults."""
    Path_obj.mkdir(parents=True, exist_ok=True)

def path_of(filename):
    """Return a path object of a given file's parent directory."""
    return Path(filename).parent.absolute()

def now_to_str():
    """Return a filename friendly datetime.now string."""
    return datetime.now().strftime('%m-%d-%Y_%I-%M-%S_%p')

# end: helper functions

# -------------------------------------------------------------

# begin: core functions

def gen_filename(id_, study_name, ext='csv'):
    """Generate a unique and descriptive output filename."""
    print("Short-term filename: ", f"{id_}-{study_name}-{now_to_str()}.{ext}" )
    return f"{id_}-{study_name}-{now_to_str()}.{ext}"

# end: core functions