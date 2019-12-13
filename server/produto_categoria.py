from app import db

class Produto_categoria(db.Model):
	__tablename__ = 'produto_categoria';

	id_produto = db.Column(db.Integer, db.ForeignKey('id_produto'));
	id_categoria = db.Column(db.Integer, db.ForeignKey('id_categoria'));

	def __init__(self, id_produto, id_categoria):
		self.id_produto			= id_produto,
		self.id_categoria		= id_categoria

	def serialize(self):
		return {
			'produto'   		: self.id_produto,
			'categoria'			: self.id_categoria
		}