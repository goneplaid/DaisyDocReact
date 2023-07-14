"""Main application and routing logic for server."""

from flask import Flask, send_from_directory
from flask_cors import CORS
from api import system_route, discover_route
from data import db, setup_db
import os

ui_dir = '../ui/build'

app = Flask(__name__, static_folder=ui_dir)
app.register_blueprint(system_route)
app.register_blueprint(discover_route)

CORS(app)

setup_db(app, db)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    """Serves the React app which consumes the API."""

    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)

