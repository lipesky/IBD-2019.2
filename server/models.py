from app import db

class Usuario(db.Model):
	__tablename__ = 'usuario';

	id_usuario = db.Column(db.Integer, primary_key = True);
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
			'id'   		: self.id_usuario,
			'nome' 		: self.nome,
			'cpf'		: self.cpf,
			'telefone'  : self.telefone,
			'email' 	: self.email,
			'senha' 	: self.senha
		}

class Permissao(db.Model):
	__tablename__ = 'permissao';

	id_permissao = db.Column(db.Integer, primary_key = True);
	descricao = db.Column(db.String(80));

	def __init__(self, descricao):
		self.descricao = descricao

	def serialize(self):
		return {
			'descricao' : self.descricao
		}

class Vendedor(db.Model):
	__tablename__ = 'vendedor';

	id_vendedor = db.Column(db.Integer, db.ForeignKey('usuario.id'));
	perc_desconto = db.Column(db.Numeric(6,3));
	perc_comissao = db.Column(db.Numeric(5,3));


	def __init__(self, perc_desconto, perc_comissao):
		self.perc_comissao = perc_comissao
		self.perc_desconto = perc_desconto

	def serialize(self):
		return {
			'perc_desconto' : self.perc_desconto,
			'perc_comissao' : self.perc_comissao
		}

class Estoque(db.Model):
	__tablename__ = 'estoque';

	id_produto = db.Column(db.Integer, db.ForeignKey('produto.id_produto'));
	quantidade = db.Column(db.Integer);

	def __init__(self, id_produto, quantidade):
		self.id_produto = id_produto
		self.quantidade = quantidade

class Empresa(db.Model):
	__tablename__ = 'empresa';

	razao_social 	= db.Column(db.String(100));
	nome_fantasia   = db.Column(db.String(100));
	endereco 		= db.Column(db.String(255));
	cnpj			= db.Column(db.String(14));

	def __init__(self, razao_social, nome_fantasia, endereco, cnpj):
		self.razao_social  = razao_social
		self.nome_fantasia = nome_fantasia
		self.endereco	   = endereco
		self.cnpj		   = cnpj

class ItemVenda(db.Model):
	__tablename__ = 'item_venda';

	id_produto	= db.Column(db.Integer, db.ForeignKey('produto.id_produto'));
	id_venda  	= db.Column(db.Integer, db.ForeignKey('venda.id_venda'));
	quantidade  = db.Column(db.Integer);
	valor		= db.Column(db.Numeric(18,3));
	desconto    = db.Column(db.Numeric(6,3));

	__init__(self, id_produto, id_venda, quantidade, valor, desconto):
		self.id_produto = id_produto
		self.id_venda	= id_venda
		self.quantidade	= quantidade
		self.valor		= valor
		self.desconto 	= desconto

class UsuarioPermissao(db.Model):
	__tablename__ = 'usuario_permissao';

	id_usuario   = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'));
	id_permissao = db.Column(db.Integer, db.ForeignKey('permissao.id_permissao'));

	__init__(self, id_usuario, id_permissao):
		self.id_usuario	  = id_usuario
		self.id_permissao = id_permissao
