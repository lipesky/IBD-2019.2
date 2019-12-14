from app import db

class Usuario(db.Model):
	__tablename__ = 'usuario';

	id_usuario = db.Column(db.Integer, primary_key = True,  auto_increment=True);
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

	id_vendedor = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), primary_key = True);
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

	id_produto = db.Column(db.Integer, db.ForeignKey('produto.id_produto'), primary_key = True);
	quantidade = db.Column(db.Integer);

	def __init__(self, id_produto, quantidade):
		self.id_produto = id_produto
		self.quantidade = quantidade

class Empresa(db.Model):
	__tablename__ = 'empresa';

	id_empresa		= db.Column(db.Integer, primary_key = True);
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

	id_produto	= db.Column(db.Integer, db.ForeignKey('produto.id_produto'), primary_key = True);
	id_venda  	= db.Column(db.Integer, db.ForeignKey('venda.id_venda'), primary_key = True);
	quantidade  = db.Column(db.Integer);
	valor		= db.Column(db.Numeric(18,3));
	desconto    = db.Column(db.Numeric(6,3));

	def __init__(self, id_produto, id_venda, quantidade, valor, desconto):
		self.id_produto = id_produto
		self.id_venda	= id_venda
		self.quantidade	= quantidade
		self.valor		= valor
		self.desconto 	= desconto

class Produto(db.Model):
	__tablename__ = 'produto';

	id_produto = db.Column(db.Integer, primary_key = True);
	id_categoria = db.Column(db.Integer, db.ForeignKey('categoria.id_categoria'));
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

class Venda(db.Model):
	__tablename__ = 'venda';

	id_venda = db.Column(db.Integer, primary_key = True);
	id_vendedor = db.Column(db.Integer, db.ForeignKey('vendedor.id_vendedor')); 
	data_venda = db.Column(db.DateTime);

	def __init__(self, id_vendedor, data_venda):
		self.id_vendedor		= id_vendedor
		self.data_venda			= data_venda

	def serialize(self):
		return {
			'venda'				: self.id_venda,
			'vendedor'   		: self.id_vendedor,
			'data'				: self.data_venda
		}

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

class Produto_categoria(db.Model):
	__tablename__ = 'produto_categoria';

	id_produto = db.Column(db.Integer, db.ForeignKey('produto.id_produto'), primary_key = True);
	id_categoria = db.Column(db.Integer, db.ForeignKey('categoria.id_categoria'), primary_key = True);

	def __init__(self, id_produto, id_categoria):
		self.id_produto			= id_produto,
		self.id_categoria		= id_categoria

	def serialize(self):
		return {
			'produto'   		: self.id_produto,
			'categoria'			: self.id_categoria
		}

class UsuarioPermissao(db.Model):
	__tablename__ = 'usuario_permissao';

	id_usuario   = db.Column(db.Integer, db.ForeignKey('usuario.id_usuario'), primary_key = True);
	id_permissao = db.Column(db.Integer, db.ForeignKey('permissao.id_permissao'), primary_key = True);

	def __init__(self, id_usuario, id_permissao):
		self.id_usuario	  = id_usuario
		self.id_permissao = id_permissao
