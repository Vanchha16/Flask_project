from flask import render_template
from . import admin_bp

@admin_bp.route('/products')
def products():
    return render_template('admin/page/product.html')