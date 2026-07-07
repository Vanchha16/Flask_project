from flask import render_template
from . import admin_bp


@admin_bp.route("/master")
def master():
    return render_template("admin/master.html")
