from flask import Flask, send_from_directory
from flask_cors import CORS
from routes.system import system_routes
from data.models import db
from data.setup import setup_db
import os

app = Flask(__name__, static_folder='../ui/build')
app.register_blueprint(system_routes)
CORS(app)

setup_db(app, db)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)
