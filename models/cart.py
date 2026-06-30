from extensions import db


class Cart(db.Model):
    cart_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    pro_id = db.Column(db.Integer, db.ForeignKey('product.pro_id'), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
