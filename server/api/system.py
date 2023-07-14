"""Route to get/set basic system information used by the app."""

from flask import Blueprint, request, jsonify
from data.models import System

system_routes = Blueprint('system_routes', __name__)

@system_routes.route('/api/system', methods=['GET', 'PUT'])
def system():
    settings = System.get_system_info()
    daisy_docs_url = settings.daisy_docs_url

    if request.method == 'PUT':
        data = request.get_json()

        if 'daisy_docs_url' in data:
            new_url = data['daisy_docs_url']
            settings.set_docs_url(new_url)
            daisy_docs_url = new_url
        else:
            return jsonify(message="Missing 'daisy_docs_url' in request body"), 400

    sys_info = {
        "daisy_docs_url": daisy_docs_url
    }

    return jsonify(sys_info)

