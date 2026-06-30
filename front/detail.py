from flask import render_template, request
from . import front_bp


@front_bp.get("/detail")
def detail():
    pro_id = request.args.get("pro_id")
    title = request.args.get("title")
    price = request.args.get("price")
    image = request.args.get("image")
    category = request.args.get("category")
    description = request.args.get("description")
    return render_template(
        "front/product_details.html",
        pro_id=pro_id, title=title, price=price,
        image=image, category=category, description=description,
    )
