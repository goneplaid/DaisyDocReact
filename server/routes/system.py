"""Route to get/set basic system information used by the app."""

from flask import Blueprint, request, jsonify

system_routes = Blueprint('system_routes', __name__)

docs_url = "https://daisyui.com/"

@system_routes.route('/api/system', methods=['GET', 'PUT'])
def system():
    global docs_url

    if request.method == 'PUT':
        data = request.get_json()
        print(data)

        if 'docs_url' in data:
            docs_url = data['docs_url']
        else:
            return jsonify(message="Missing 'docs_url' in request body"), 400

    sys_info = {
        "docs_url": docs_url
    }

    return jsonify(sys_info)

