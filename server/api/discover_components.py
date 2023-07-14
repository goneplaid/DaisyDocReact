"""Route to get/set basic system information used by the app."""

from flask import Blueprint, request, jsonify
from data.models import System

discover_route = Blueprint('discover_route', __name__)

@discover_route.route('/api/discover', methods=['POST'])
def discover():
    params = request.get_json()
    daisy_docs_url = params.get('daisy_docs_url')

    if daisy_docs_url is None:
        settings = System.get_system_info()
        daisy_docs_url = settings.daisy_docs_url

    return jsonify(daisy_docs_url)
