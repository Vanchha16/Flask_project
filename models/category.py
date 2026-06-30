from extensions import db


class Category(db.Model):
    cat_id = db.Column(db.Integer, primary_key=True)
    category_name = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=False)
