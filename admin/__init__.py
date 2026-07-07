from flask import Blueprint, render_template

admin_bp = Blueprint("admin", __name__, url_prefix="/admin")

from . import master
from . import dashboard
from . import product
from . import user