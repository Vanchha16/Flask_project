from flask import Blueprint

front_bp = Blueprint("front", __name__)

from . import home, cart, checkout, detail, create_user
