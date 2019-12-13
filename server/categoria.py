from app import db

class Categoria(db.Model):
	__tablename__ = 'categoria';

	id_categoria = db.Column(db.Integer, primary_key = True);
	nome = db.Column(db.String(100));

	def __init__(self, nome):
		self.nome		= nome

	def serialize(self):
		return {
			'categoria' : self.id_categoria,
			'nome'   	: self.nome
		}