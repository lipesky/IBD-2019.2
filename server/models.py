from app import db

class Usuario(db.Model):
	__tablename__ = 'usuario';

	id = db.Column(db.Integer, primary_key = True);
	nome = db.Column(db.String(50));
	cpf = db.Column(db.String(11), unique = True, nullable = False);
	telefone = db.Column(db.String(13));
	email = db.Column(db.String(30), unique = True, nullable = False);
	senha = db.Column(db.String(128), unique = False, nullable = False);

	def __init__(self, nome, cpf, telefone, email, senha):
		self.nome 		= nome
		self.cpf 		= cpf
		self.telefone   = telefone
		self.email 		= email
		self.senha 		= senha

	def serialize(self):
		return {
			'id'   		: self.id,
			'nome' 		: self.nome,
			'cpf'		: self.cpf,
			'telefone'  : self.telefone,
			'email' 	: self.email,
			'senha' 	: self.senha
		}