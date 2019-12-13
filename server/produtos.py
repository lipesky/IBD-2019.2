from app import db

class Produto(db.Model):
	__tablename__ = 'produto';

	id_produto = db.Column(db.Integer, primary_key = True);
	id_categoria = db.Column(db.Integer, db.ForeignKey('id_categoria'));
	codigo_de_barra = db.Column(db.String(13));
	nome = db.Column(db.String(50));
	peso = db.Column(db.Numeric(8,3));
	unidade = db.Column(db.String(5));
	preco = db.Column(db.Numeric(8,3));


	def __init__(self, id_categoria, codigo_de_barra, nome, peso, unidade, preco):
		self.id_categoria		= id_categoria
		self.codigo_de_barra	= codigo_de_barra
		self.nome				= nome
		self.peso				= peso
		self.unidade			= unidade
		self.preco				= preco

	def serialize(self):
		return {
			'categoria'			: self.id_categoria,
			'produto'   		: self.id_produto,
			'cod'				: self.codigo_de_barra,
			'nome' 				: self.nome,
			'peso'				: self.peso,
			'unidade'			: self.unidade,
			'preco'				: self.preco
		}